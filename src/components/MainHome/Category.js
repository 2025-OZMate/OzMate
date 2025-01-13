import React from "react";
import styles from "../../styles/MainHome/Banner.module.css"
export default function Category({ type }) {

    return (
        <div>
            <div className={styles["category"]}>{type}</div>
        </div>
    )
}