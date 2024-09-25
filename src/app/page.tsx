"use client"

import Header from "./header";
import PolicyDocument from "./components/policyDocument";
import { useState } from "react";
import { Policy } from "./models/policy";

export default function Home() {

  const [policies, setPolicies] = useState([] as Policy[]);

  const addPolicy = (newPolicy: Policy) => {
      setPolicies([...policies, newPolicy]);
  };

  const removePolicy = (policy: Policy) => {
      setPolicies(policies.filter((p) => p != policy));
  };

  const approuvePolicy = (policy: Policy) => {
      const index = policies.indexOf(policy);
      policies[index].isDraft = false;
      setPolicies([...policies]);
  };

  const resetPolicies = () => {
    setPolicies([]);
  };
  
  return (
    
    <div>
      <main>
        <Header resetPolicies={resetPolicies}/>
        <PolicyDocument policies={policies} removePolicy={removePolicy} approuvePolicy={approuvePolicy} addPolicy={addPolicy}/>
      </main>
    </div>
  );
}
