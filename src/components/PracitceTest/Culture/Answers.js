import React from "react";
import styles from "../../../styles/Practice/answerBtn.module.css";

function Answers({ answer, onClick }) {
    return (
        <button className={styles["button"]} onClick={onClick}>
            {answer}
        </button>
    );
}

export default Answers;
