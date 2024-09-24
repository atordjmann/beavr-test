"use client"
import React from 'react';
import layoutStyles from "../styles/layout.module.css";
import PolicyDetail from './policyDetail';
import PolicyCreation from './policyCreation';
import VersionList from './versionPreview';

export default function PolicyDocument() {
  return (
    <div className={layoutStyles.container}>
      <PolicyCreation/>    
      <VersionList/>  
      <PolicyDetail/>
    </div>
  );
};
