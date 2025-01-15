import React from "react";
import styles from "../../styles/MainHome/Banner.module.css"
export default function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <img src="/images/train.png" style={{ height: "375px" }} alt="Train" />
            <div className={styles["logo-white"]}> <img src="/images/logo-white.png"  ></img></div>
            <div className={styles.textContainer}>
                <div>Types of Transportation</div>
                <div>Cards in Australia</div>
            </div>
        </div>
    )
}