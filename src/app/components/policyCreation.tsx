import React, { useState } from 'react';
import InfoBox from './infoBox';
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/policy-document.module.css";
import { Policy } from '../models/policy';

export default function PolicyCreation({ addPolicy }: {addPolicy: any}) {

	const createPolicy = (policy: Policy) => {
		addPolicy(policy);
		console.log(policy);
	  };


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
			createPolicy={createPolicy}
		  />
		  <InfoBox
			title="Start from a template"
			description="Use Beavr templates to get started"
			imageSrc="/images/document-icon.svg"
			buttonText="Start"
			createPolicy={createPolicy}
		  />
		</div>
	  </div>
  );
};
