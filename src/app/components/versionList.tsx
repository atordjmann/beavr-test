import { Policy } from "../models/policy";
import styles from "../styles/policy-document.module.css";
import VersionPreview from "./versionPreview";

interface VersionListProps {
    policies: Policy[];
    removePolicy: (policy: Policy) => void;
    approuvePolicy: (policy: Policy) => void;
  }
  
  export default function VersionList({ policies, removePolicy, approuvePolicy }: VersionListProps) {
    return (
      <div className={styles.previewsContainer}>
        {policies
          .slice().reverse()
          .map((policy) => (
            <VersionPreview
              key={policy.title}
              policy={policy}
              removePolicy={removePolicy}
              approuvePolicy={approuvePolicy}
            />
          ))}
      </div>
    );
  }