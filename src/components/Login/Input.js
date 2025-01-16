import React from "react";
import styles from "../../styles/Login/Login.module.css"
export default function Input({ placeholder, type, value, onChange }) {
    return (
        <div className={styles["input-container"]}>
            <input
                placeholder={placeholder}
                type={type}
                className={styles.input}
                value={value}
                onChange={onChange}
                required></input>
        </div>
    )
}