import React from 'react';
import layoutStyles from "../styles/layout.module.css";
import PolicyDetail from './policyDetail';
import PolicyCreation from './policyCreation';

export default function PolicyDocument() {
  return (
    <div className={layoutStyles.container}>
      <PolicyCreation/>      
      <PolicyDetail/>
    </div>
  );
};
