import React from 'react';
import InfoBox from './infoBox';
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/policy-document.module.css";

export default function PolicyCreation() {
  return (
	  <div className={layoutStyles.card}>
		<div className={styles.textContainer}>
			<h1 className={styles.title}>Create a policy</h1>
			<p className={styles.description}>
			Write a policy that suits you organisation.
			</p>
		</div>
		
		<div className={styles.boxContainer}>
		  <InfoBox
			title="Start from scratch"
			description="Directly start writing your policy in the editor"
			imageSrc="/images/time-icon.svg"
			buttonText="Start"
		  />
		  <InfoBox
			title="Start from a template"
			description="Use Beavr templates to get started"
			imageSrc="/images/document-icon.svg"
			buttonText="Start"
		  />
		</div>
	  </div>
  );
};
