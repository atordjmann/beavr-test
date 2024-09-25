import React, { useState } from 'react';
import layoutStyles from "../styles/layout.module.css";
import Image from "next/image";
import Modal from 'react-modal';
import { PolicyVersion } from '../../lib/features/policyVersions/policyVersion';
import { useApprovePolicyMutation, useDeletePolicyMutation } from '@/lib/features/policyVersions/policyVersionSlice';

interface VersionPreviewProps {
  policy: PolicyVersion;
}

export default function VersionPreview({ policy }: VersionPreviewProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [approuvePolicy] = useApprovePolicyMutation();
  const [removePolicy] = useDeletePolicyMutation();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const toggleOptions = () => setShowOptions(!showOptions);

  const imageSrc = policy.isDraft ? "/images/draft-version.svg" : "/images/approved-version.svg";
  const actionButton = policy.isDraft
    ? <button onClick={() => approuvePolicy(policy.id)} className={layoutStyles.actionButton}>Approve</button>
    : <button onClick={openModal} className={layoutStyles.secondaryButton}>View</button>;

  return (
    <div className={layoutStyles.infoBox}>
      <Image src={imageSrc} alt={policy.title} width={104} height={64} />

      <div className={layoutStyles.infoBoxTextContainer}>
        <h3 className={layoutStyles.infoBoxTitle}>{policy.title}</h3>
      </div>

      <div className={layoutStyles.buttonContainer}>
        {actionButton}
        <div className={layoutStyles.dropDownContainer}>
          <button onClick={toggleOptions} className={layoutStyles.secondaryButton}>...</button>

          {showOptions && (
            <div className={layoutStyles.optionsContainer}>
              <button className={layoutStyles.optionButton} onClick={() => removePolicy(policy.id)}>Delete version</button>
              <button className={layoutStyles.optionButton} onClick={() => downloadPolicy(policy)}>Download</button>
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Policy Details">
        <h2>Policy Version Details</h2>
        <p><strong>Title:</strong> {policy.title}</p>
        <p><strong>Description:</strong> {policy.content}</p>
        <button onClick={closeModal} className={layoutStyles.actionButton}>Close</button>
      </Modal>
    </div>
  );
}

const downloadPolicy = (policy: PolicyVersion) => {
  const content = `Policy Title: ${policy.title}\nContent: ${policy.content}`;
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${policy.title}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
