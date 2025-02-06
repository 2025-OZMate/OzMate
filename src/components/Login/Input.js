import React from "react";
import styles from "../../styles/Login/Login.module.css"
export default function Input({ placeholder, type = 'text', value, onChange, required }) {
    return (
        <div className={styles["input-container"]}>
            <input
                placeholder={placeholder}
                type={type}
                className={styles.input}
                value={value}
                onChange={onChange}
                required={required}></input>
        </div>
    )
}