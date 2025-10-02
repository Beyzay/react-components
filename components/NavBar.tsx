import React from "react";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
    return (
                // Add navigation menu
                <nav id="navbar" className={styles.nav}>
                    <a href="#home">Home</a>
                    <a href="#toggle">Toggle</a>
                    <a href="#counter">Counter</a>
                    <a href="#contact">Contact</a>
                </nav>
    );
}