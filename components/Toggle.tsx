import { useState } from "react";
import styles from "../styles/Toggle.module.css";

// Define the type for props
type ToggleProps = {
    message?: string; // optional prop
}

export default function Toggle({ message }: ToggleProps) {

    // Initialize the "isVisible" state to false
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <div className={styles.flexContainer}>

                {/* Attach onClick event handler to the button element 
                to update the "isVisible" state for toggling the button name and message visibility */}
                <button
                    className={styles.button}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? "Hide" : "Show"} Info
                </button>

                {/* Toggle the visibility of the p element when the button is clicked */}
                {/* Render the content of the p element with the "message" prop passed from the parent component */}
                {isVisible && <p>{message ?? "No \"message\" prop provided in the parent component."}</p>}

            </div>
        </div>
    );
}