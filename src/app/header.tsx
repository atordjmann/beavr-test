import Image from "next/image";
import beavrLogo from "/public/beavr-logo.svg"
import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { useState } from "react";
import { useResetPolicyMutation } from "@/lib/features/policyVersions/policyVersionSlice";

export default function Header() {
  const [resetPolicy] = useResetPolicyMutation();

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };
    
    return (
        <header className={styles.header}>
            <Image
            src={beavrLogo}
            alt="BEAVR logo"
            className={styles.headerImage}
            width={75}
            height={24}
            />
            <h1 className={styles.title}>Code of conduct</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.secondaryButton}>Close  X</button>
                <div className={styles.dropDownContainer}>
                    <button onClick={toggleOptions} className={styles.secondaryButton}>...</button>

                    {showOptions && (
                    <div className={styles.optionsContainer}>
                        <button className={styles.optionButton} onClick={() => resetPolicy('')}>Reset document</button>
                    </div>
                    )}
                </div>
            </div>
        </header>
    )
}
