import layoutStyles from "../styles/layout.module.css";
import PolicyDetail from './policyDetail';
import PolicyCreation from './policyCreation';
import VersionList from './versionPreview';
import { Policy } from '../models/policy';

export default function PolicyDocument({addPolicy, policies, removePolicy, approuvePolicy }: {addPolicy: any, policies: Policy[], removePolicy: any, approuvePolicy: any}) {
    return (
        <div className={layoutStyles.container}>
            <PolicyCreation addPolicy={addPolicy}/>    
            <VersionList policies={policies} removePolicy={removePolicy} approuvePolicy={approuvePolicy}/>  
            <PolicyDetail/>
        </div>
    );
};
