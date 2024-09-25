import layoutStyles from "../styles/layout.module.css";
import Image from "next/image";
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Policy } from "../models/policy";

Modal.setAppElement('#root');

export default function InfoBox(
    {title, description, imageSrc, buttonText, createPolicy}: {title: string, description: string, imageSrc: any, buttonText: string, createPolicy: any}) {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [titleContent, setTitleContent] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        const newPolicy : Policy= {
            title: titleContent,
            content: editorContent,
            isDraft: true
        };

        createPolicy(newPolicy)

        setEditorContent('');
        setTitleContent('');
    };

    const cancelModal = () => {
        setModalIsOpen(false);
    };

    const handleTextChange = (e: any) => {
        setEditorContent(e.target.value);
    };

    const handleTitleChange = (e: any) => {
        setTitleContent(e.target.value);
    };

    return (
      <div className={layoutStyles.infoBox}>
        <Image
            src={imageSrc}
            alt="title"
            width={20}
            height={20}></Image>
  
        <div className={layoutStyles.infoBoxTextContainer}>
          <h3 className={layoutStyles.infoBoxTitle}>{title}</h3>
          <p className={layoutStyles.infoBoxDescription}>{description}</p>
        </div>
  
        <button onClick={openModal} className={layoutStyles.actionButton}>
          {buttonText}
        </button>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={layoutStyles}
        contentLabel="Text Editor Modal"
      >
        <h2>New policy</h2>

        <input
            value={titleContent}
            onChange={handleTitleChange}

        />

        <textarea
          value={editorContent}
          onChange={handleTextChange}
          className={layoutStyles.textArea}
          placeholder="Type your text here..."
        />

        <button onClick={closeModal} className={layoutStyles.actionButton}>
          Save
        </button>
        <button onClick={cancelModal} className={layoutStyles.secondaryButton}>
          Cancel
        </button>
      </Modal>
      </div>
    );
};    
    