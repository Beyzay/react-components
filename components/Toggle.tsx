import { useState } from "react";
import styles from "../styles/Toggle.module.css";

// Define the type for props
type ToggleProps = {
    message?: string; // optional prop
}

export default function Toggle({ message }: ToggleProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <div className={styles.flexContainer}>

                {/* Attach onClick event handler to the button element 
                to toggle the button name and message visibility */}
                <button
                    className={styles.button}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? "Hide" : "Show"} Info
                </button>

                {/* Toggle the visibility of the p element with message when button is clicked */}
                {isVisible && <p>{message}</p>}

            </div>
        </div>
    );
}