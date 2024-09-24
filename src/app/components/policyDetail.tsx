import React from 'react';
import Image from "next/image";
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/policy-document.module.css";
import "../styles/globals.css";

export default function PolicyDetail() {
  return (
    <div className={layoutStyles.card}>
        <div className={styles.policyDetails}>
            <div className={styles.policyDetailsTexts}>
            <div className={styles.policyDetailsText}>
                <h1 className={styles.title}>Description</h1>
                <p className={styles.description}>
                This is a short description for the main card.
                </p>
            </div>
            <div className={styles.policyDetailsText}>
                <h1 className={styles.title}>Time sensitivity & recurrence</h1>
                <p className={styles.description}>
                    <Image 
                        src="/images/renew-icon.svg" 
                        alt="renew"
                        width={24}
                        height={24}
                    ></Image>
                Renew annually
                </p>
            </div>
            </div>           
            
            <div className={styles.policyDetailsInput}>
                <input 
                    className={styles.input}
                    placeholder='Add additional context'></input>
            </div>
        </div>
    </div>
  );
};
