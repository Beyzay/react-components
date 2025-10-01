import React from "react";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
    return (
        <div>
            <div>

                {/* Add Navigation menu */}
                <nav className={styles.nav}>
                    <a href="#home">Home</a>
                    <a href="#toggle">Toggle</a>
                    <a href="#counter">Counter</a>
                    <a href="#contact">Contact</a>
                </nav>
                
            </div>
        </div>
    );
}