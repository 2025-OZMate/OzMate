import React from "react";
import styles from "../../styles/Practice/SituationCard.module.css"
function SituationCard({ imgSrc, situation }) {
    return (
        <div className={styles["card-container"]}>
            <img src={imgSrc}></img>
            <div style={{ fontSize: "16px", marginTop: "4px" }}>{situation}</div>
        </div>
    )
}
export default SituationCard;