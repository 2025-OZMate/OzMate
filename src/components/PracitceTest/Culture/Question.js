import React from "react";
import styles from "../../../styles/Practice/Quiz.module.css"
const Question = ({ questionIndex, question, choices, onChoiceClick }) => {
    return (
        <div className={styles["all-container"]}>
            <img className={styles.quizBannerImg} src="/images/quizBanner.png"></img>
            <img className={styles.bannerLogoImg} src="/images/bannerLogo.png"></img>

            <div className={styles.contentContainer}>
                <div className={styles["question-container"]}>
                    <h3>Quiz. 0{questionIndex + 1}</h3>
                    <span className={styles.question}>{question}</span>
                </div>
                <ul className={styles["choice-container"]}>
                    {choices.map((option, index) => (
                        <li key={index} onClick={() => onChoiceClick(option)} className={styles.choice}>
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Question;
