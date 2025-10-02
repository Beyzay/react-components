import React, { useState } from "react";
import styles from "../styles/Counter.module.css";

// Define the type for props
type CounterProps = {
    title: string; // required prop
}

export default function Counter({ title }: CounterProps) {
    
    // Initialize the "count" state to 0
    const [count, setCount] = useState(0);

    return(
        <div>
            <div className={styles.flexContainer}>

                {/* Render the content of the h2 element with the "title" prop passed from the parent element */}
                {/* Update the content of the span element depending on the "count" state when the relevant button is clicked */}
                <h2 className={styles.count}>
                    {title}: <span className={styles.countNumber}>{count}</span>
                </h2>

                {/* Attach onClick event handler to the button element 
                to update the "count" state */}
                <button
                    className={styles.button}
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>

                {/* Attach onClick event handler to the button element 
                to update the "count" state */}
                <button
                    className={styles.button}
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>

            </div>
        </div>
    );
}