import React from 'react';
import styles from "../styles/policy-document.module.css";
import layoutStyles from "../styles/layout.module.css";
import Image from "next/image";

export default function VersionList() {
  return (
    <div className={styles.previewsContainer}>
        <VersionPreview
            title="Last version (draft)"
            isDraft={true}
        />
        <VersionPreview
            title="Version of Dec 2023"
            isDraft={false}
        />
    </div>
  );
};

function VersionPreview(
    {title, isDraft}: {title: string, isDraft: boolean}) {
    
    let imageSrc = "/images/approved-version.svg";
    let actionButton = <button className={layoutStyles.secondaryButton}>View</button>;;
    if(isDraft){
        imageSrc = "/images/draft-version.svg";
        actionButton = <button className={layoutStyles.actionButton}>Approve</button>;
    }
    return (
      <div className={layoutStyles.infoBox}>
        <Image
            src={imageSrc}
            alt="title"
            width={104}
            height={64}></Image>
  
        <div className={layoutStyles.infoBoxTextContainer}>
          <h3 className={layoutStyles.infoBoxTitle}>{title}</h3>
        </div>

        <div className={layoutStyles.buttonContainer}>
            {actionButton}
            <button className={layoutStyles.secondaryButton}>...</button>
        </div>     
      </div>
    );
};
