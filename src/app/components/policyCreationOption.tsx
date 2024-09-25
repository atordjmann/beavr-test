import layoutStyles from "../styles/layout.module.css";
import Image from "next/image";
import React, { useState, ChangeEvent } from 'react';
import Modal from 'react-modal';
import { useCreatePolicyMutation } from "@/lib/features/policyVersions/policyVersionSlice";
import { CreatablePolicy } from "../models/creatablePolicy";

// Set app element for accessibility
Modal.setAppElement('#root');

interface InfoBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  containsTemplate: boolean;
}

export default function PolicyCreationOption({
  title,
  description,
  imageSrc,
  buttonText,
  containsTemplate,
}: InfoBoxProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [titleContent, setTitleContent] = useState(containsTemplate ? 'New version (draft)' : '');
  const [editorContent, setEditorContent] = useState(containsTemplate ? 'Date of creation : JJ/MM/YYYY \nThis policy aims at : \nFind more information here:' : '');
  const [errors, setErrors] = useState({ title: '', content: '' });
  const [createPolicy] = useCreatePolicyMutation();

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => {
    const newErrors = { title: '', content: '' };
    let isValid = true;
    if (!titleContent.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!editorContent.trim()) {
      newErrors.content = 'Content is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    const newPolicy: CreatablePolicy = {
      title: titleContent,
      content: editorContent,
    };

    createPolicy(newPolicy);
    resetForm();
  };

  const cancelModal = () => resetForm();

  const resetForm = () => {
    setModalIsOpen(false);
    setEditorContent(containsTemplate ? 'Date of creation : JJ/MM/YYYY \nThis policy aims at : \nFind more information here:' : '');
    setTitleContent(containsTemplate ? 'New version (draft)' : '');
    setErrors({ title: '', content: '' });
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setEditorContent(e.target.value);
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitleContent(e.target.value);

  return (
    <div className={layoutStyles.infoBox}>
      <Image src={imageSrc} alt={title} width={20} height={20} />

      <div className={layoutStyles.infoBoxTextContainer}>
        <h3 className={layoutStyles.infoBoxTitle}>{title}</h3>
        <p className={layoutStyles.infoBoxDescription}>{description}</p>
      </div>

      <button onClick={openModal} className={layoutStyles.actionButton}>
        {buttonText}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={resetForm}
        contentLabel="Create your new policy Version"
        className={layoutStyles.modal}
      >
        <h2>New Policy</h2>

        <input
          value={titleContent}
          onChange={handleTitleChange}
          placeholder="Policy Title"
          className={layoutStyles.input}
        />
        {errors.title && <p className={layoutStyles.errorText}>{errors.title}</p>}

        <textarea
          value={editorContent}
          onChange={handleTextChange}
          className={layoutStyles.textArea}
          placeholder="Write the content of your policy"
        />
        {errors.content && <p className={layoutStyles.errorText}>{errors.content}</p>}

        <div className={layoutStyles.modalButtons}>
          <button onClick={closeModal} className={layoutStyles.actionButton}>
            Save
          </button>
          <button onClick={cancelModal} className={layoutStyles.secondaryButton}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
