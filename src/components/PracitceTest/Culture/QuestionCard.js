import React from "react";
import styles from "../../../styles/Practice/QuestionCard.module.css"

function QuestionCard({ number, description }) {
    return (
        <div className={styles["card-container"]}>
            <div className={styles.Questions}>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>Quiz. {number}</p>
                <div>{description}</div>
            </div>
        </div>
    )
}
export default QuestionCard;