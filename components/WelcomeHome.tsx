import React from "react";
import styles from "../styles/WelcomeHome.module.css";

export default function WelcomeHome() {
    return (
        <div>
            <div className={styles.flexContainer}>

                <h1 className={styles.h1}>Welcome to my home page!</h1>
                <br/>
                <p>Please use the navigation menu to navigate between components using props and state.</p>

            </div>
        </div>
    );
}