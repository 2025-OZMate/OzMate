import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Practice/Card.module.css";
function Card({ subject, title, src, navigateTo }) {
  const navigate = useNavigate();
  const handleNextTo = () => {
    if (subject === "English Practice") {
      navigate("/Translation")
    }
    if (subject === "Australia Culture Quiz") {
      navigate("/Quiz")
    }
  }
  return (
    <div className={styles.allContainer} onClick={handleNextTo}>
      <div className={styles.contentContainer}>
        <img src={`/images/${src}.png`} className={styles.logoImg}></img>
        <div className={styles.titleContainer}>
          <p style={{ fontSize: "20px", fontWeight: "500" }}>{subject}</p>
          <p style={{ marginTop: "8px", color: "#777", fontSize: "12px" }}>{title}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
