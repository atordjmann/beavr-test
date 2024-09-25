import layoutStyles from "../styles/layout.module.css";
import PolicyDetail from './policyDetail';
import PolicyCreation from './policyCreation';
import { Policy } from '../models/policy';
import VersionList from "./versionList";

interface PolicyDocumentProps {
  addPolicy: (policy: Policy) => void;
  policies: Policy[];
  removePolicy: (policy: Policy) => void;
  approuvePolicy: (policy: Policy) => void;
}

export default function PolicyDocument({
  addPolicy,
  policies,
  removePolicy,
  approuvePolicy,
}: PolicyDocumentProps) {
  return (
    <div className={layoutStyles.container}>
      <PolicyCreation addPolicy={addPolicy} />
      <VersionList
        policies={policies}
        removePolicy={removePolicy}
        approuvePolicy={approuvePolicy}
      />
      <PolicyDetail />
    </div>
  );
}
