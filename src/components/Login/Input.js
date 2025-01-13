import React from "react";
import styles from "../../styles/Login/Login.module.css"
export default function Input({ placeholder, type }) {
    return (
        <div className={styles["input-container"]}>
            <input placeholder={placeholder} type={type} className={styles.input} required></input>
        </div>
    )
}