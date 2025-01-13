import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Practice/Card.module.css"
function Card({ subject, title, description, navigateTo }) {
    const navigate = useNavigate()

    const handleNext = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    }
    return (
        <div className={styles.allContainer}>
            <h2>{subject}</h2>

            <div className={styles.cardContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.line}></div>
                <div className={styles.next}> <img src="/images/next.png" onClick={handleNext}></img></div>
            </div>
        </div>
    )
}
export default Card;