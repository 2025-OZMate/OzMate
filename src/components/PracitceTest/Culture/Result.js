import React from "react";
import styles from "../../../styles/Practice/Result.module.css"
const Result = ({ imgsrc, correct, explanation, next, btnTitle, classTitle, explainStyle }) => {
    return (
        <div className={styles["all-container"]}>
            <div className={styles["img-container"]}>
                <img src={imgsrc} className={styles[classTitle]} />
            </div>
            <div className={styles["explain-container"]}>
                <h3>{correct}</h3>
                <p className={styles[explainStyle]}>{explanation}</p>
            </div>
            <button onClick={next}>{btnTitle}</button>
        </div>
    );
};

export default Result;
