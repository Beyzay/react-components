import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {

    // Initialize the "input" state to ""
    const [input, setInput] = useState("");

    // Initialize the "isSubmitted" state to false
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Initialize the "submissionMessage" state to ""
    const [submissionMessage, setSubmissionMessage] = useState("");

    // Define an event handler function
    const handleSubmit = (e: React.FormEvent) => {

        // Prevent default behavior (form submission)
        e.preventDefault();
        
        // Validate input 
        // If the trimmed input is empty, update the "submissionMessage" state with an error message
        // If the trimmed input is not empty; clear input, update the "isSubmitted" state to true and update the "submissionMessage" state with an success message
        if (input.trim() === "") { 
            setSubmissionMessage("Error: Please fill out the form!");
        } else {
            setInput("");
            setIsSubmitted(true);
            setSubmissionMessage("Success: Form submitted!");
        }
    };

    return (
        <div>
            <div className={styles.flexContainer}>
                
                <h2 className={styles.h2}>Form</h2>

                {/* Use the "isSubmitted" state to toggle the visibility of the form element */}
                {!isSubmitted && (

                    // Attach onSubmit handler to the form element
                    // to update the "submissionMessage" state for preventing default form behavior and updating the submission message
                    <form className={styles.formContainer} onSubmit={handleSubmit}>

                        {/* Attach onChange handler to the input element */}
                        <input
                            className={styles.input}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Fill out this field"
                        />

                        <button className={styles.button} type="submit">Submit</button>
                    </form>
                )}

                {/* Display success or error message if set*/}
                {submissionMessage && 
                    <p className={styles.submissionMessage}>
                        {submissionMessage}
                    </p>
                }

            </div>
        </div>
    );

}