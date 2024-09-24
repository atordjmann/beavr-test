"use client"
import React, { useState } from 'react';
import layoutStyles from "../styles/layout.module.css";
import PolicyDetail from './policyDetail';
import PolicyCreation from './policyCreation';
import VersionList from './versionPreview';
import { Policy } from '../models/policy';

export default function PolicyDocument() {
    const [policies, setPolicies] = useState([] as Policy[]);

    const addPolicy = (newPolicy: Policy) => {
      setPolicies([...policies, newPolicy]);
    };
  
    const removePolicy = (index: number) => {
      setPolicies(policies.filter((_, i) => i !== index));
    };
    return (
        <div className={layoutStyles.container}>
            <PolicyCreation addPolicy={addPolicy}/>    
            <VersionList policies={policies} removePolicy={removePolicy}/>  
            <PolicyDetail/>
        </div>
    );
};
