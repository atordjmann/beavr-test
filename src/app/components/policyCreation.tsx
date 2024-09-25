import PolicyCreationOption from './policyCreationOption';
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/policy-document.module.css";

export default function PolicyCreation() {
  return (
    <div className={layoutStyles.card}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create a Policy</h1>
        <p className={styles.description}>
          Write a policy that suits your organization.
        </p>
      </div>
      
      <div className={styles.boxContainer}>
        <PolicyCreationOption
          title="Start from Scratch"
          description="Directly start writing your policy in the editor."
          imageSrc="/images/time-icon.svg"
          buttonText="Start"
		  containsTemplate={false}
        />
        
        <PolicyCreationOption
          title="Start from a Template"
          description="Use Beavr templates to get started."
          imageSrc="/images/document-icon.svg"
          buttonText="Start"
		  containsTemplate={true}
        />
      </div>
    </div>
  );
}
