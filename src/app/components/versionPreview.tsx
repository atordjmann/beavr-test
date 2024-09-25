import React, { useState } from 'react';
import styles from "../styles/policy-document.module.css";
import layoutStyles from "../styles/layout.module.css";
import Image from "next/image";
import Modal from 'react-modal';
import { Policy } from '../models/policy';

export default function VersionList({ policies, removePolicy, approuvePolicy }: {policies: Policy[], removePolicy: any, approuvePolicy: any}) {
    return (
        <div className={styles.previewsContainer}>
            {policies
                .reverse()
                .map((policy) => {return (
                    <VersionPreview key={policy.title} policy={policy} removePolicy={removePolicy} approuvePolicy={approuvePolicy} />
                )})}
        </div>
    );
};

function VersionPreview(
    {policy, removePolicy, approuvePolicy}: {policy: Policy, removePolicy: any, approuvePolicy: any}) {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };
    
    let imageSrc = "/images/approved-version.svg";
    let actionButton = <button onClick={openModal} className={layoutStyles.secondaryButton}>View</button>;;
    if(policy.isDraft){
        imageSrc = "/images/draft-version.svg";
        actionButton = <button onClick={() => approuvePolicy(policy)} className={layoutStyles.actionButton}>Approve</button>;
    }
    return (
      <div className={layoutStyles.infoBox}>
        <Image
            src={imageSrc}
            alt="title"
            width={104}
            height={64}></Image>
  
        <div className={layoutStyles.infoBoxTextContainer}>
          <h3 className={layoutStyles.infoBoxTitle}>{policy.title}</h3>
        </div>

        <div className={layoutStyles.buttonContainer}>
            {actionButton}
            <div className={layoutStyles.dropDownContainer}>
                <button onClick={toggleOptions} className={layoutStyles.secondaryButton}>...</button>

                {showOptions && (
                <div className={layoutStyles.optionsContainer}>
                    <button className={layoutStyles.optionButton} onClick={() => removePolicy(policy)}>Delete version</button>
                    <button className={layoutStyles.optionButton} onClick={() => downloadPolicy(policy)}>Download</button>
                </div>
                )}
            </div>

        </div>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={layoutStyles}
        contentLabel="Text Editor Modal"
      >
        <h2>Policy version details</h2>

        <span>Title: {policy.title}</span>
        <span>Description: {policy.content}</span>

        <button onClick={closeModal} className={layoutStyles.actionButton}>
          Close
        </button>
      </Modal>

      </div>
    );
};

const downloadPolicy = (policy: Policy) => {
    const content = `Policy Title: ${policy.title}\nContent: ${policy.content}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'policy.txt';
    document.body.appendChild(link);

    // Trigger the download by simulating a click
    link.click();
    document.body.removeChild(link);
  };
