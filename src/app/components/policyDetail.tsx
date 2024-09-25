import React from 'react'; 
import Image from "next/image";
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/policy-document.module.css";

export default function PolicyDetail() {
  return (
    <div className={layoutStyles.card}>
      <div className={styles.policyDetails}>
        <div className={styles.policyDetailsTexts}>
          <div className={styles.policyDetailsText}>
            <h1 className={styles.title}>Description</h1>
            <p className={styles.description}>
              This is the description of the policy document.
            </p>
          </div>

          <div className={styles.policyDetailsText}>
            <h1 className={styles.title}>Time Sensitivity & Recurrence</h1>
            <p className={styles.description}>
              <Image 
                src="/images/renew-icon.svg" 
                alt="Renew"
                width={24}
                height={24}
              />
              Renew annually
            </p>
          </div>
        </div>           

        {/* Additional Context Input */}
        <div className={styles.policyDetailsInput}>
          <input 
            className={styles.input}
            placeholder="Add additional context"
          />
        </div>
      </div>
    </div>
  );
}
