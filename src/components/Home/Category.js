import React from "react";
import styles from "../../styles/MainHome/Banner.module.css"
export default function Category({ type, onClick, isActive }) {

    return (
        <div>
            <div
                className={`${styles["category"]} ${isActive ? styles["active-category"] : ""}`}
                onClick={onClick}>{type}
            </div>
        </div>
    )
}