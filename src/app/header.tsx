import Image from "next/image";
import beavrLogo from "/public/beavr-logo.svg"
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

export default function Header() {
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
            <div>
                <button className={styles.secondaryButton}>Close  X</button>
                <button className={styles.secondaryButton}>...</button>
            </div>
        </header>
    )
}
