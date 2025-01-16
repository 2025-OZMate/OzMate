import React from "react";
import styles from "../../styles/MainHome/InformationCard.module.css"
function InformationCard({ src, title, subTitle, type }) {


    return (
        <div className={styles["all-container"]}>
            <div>
                <img src={src} className={styles["viewImg"]}></img>
            </div>

            <div style={{ padding: "12px 0 0 12px" }}>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>{title}</p>
                <p style={{ fontSize: "10px", margin: "4px 0 4px 0", width: "199px", height: "28px" }}>{subTitle}</p>

                <div className={styles.typeContainer}>
                    <span className={styles["type"]}>{type}</span>
                </div>
            </div>
        </div>
    )
}
export default InformationCard;