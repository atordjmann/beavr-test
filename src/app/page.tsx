"use client"

import Header from "./header";
import PolicyDocument from "./components/policyDocument";
import { useState } from "react";
import { PolicyVersion } from "../lib/features/policyVersions/policyVersion";

export default function Home() {
  return (
    
    <div>
      <main>
        <Header/>
        <PolicyDocument/>
      </main>
    </div>
  );
}
