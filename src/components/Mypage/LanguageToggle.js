import React, { useState } from "react";
import styles from "../../styles/Mypage/LanguageToggle.module.css";

export default function LanguageToggle({ language, isActive, onToggle }) {


    return (
        <div className={styles["toggle-container"]}>
            <span className={styles["toggle-label"]}>{language}</span>

            <label className={styles["toggle-switch"]}>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={onToggle}
                />
                <span className={styles["toggle-slider"]} />
            </label>
        </div>
    );
}
