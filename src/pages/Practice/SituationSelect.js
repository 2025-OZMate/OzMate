import React from "react";
import BackButton from "../../components/Details/BackButton";
import SituationCard from "../../components/PracitceTest/SituationCard";
import styles from "../../styles/Practice/SituationCard.module.css"

const situations = [
    { src: "/images/bookmark-clicked.png", place: "Resturant" },
    { src: "/images/bookmark-clicked.png", place: "hospital" },
    { src: "/images/bookmark-clicked.png", place: "Market" },
    { src: "/images/bookmark-clicked.png", place: "School" },
    { src: "/images/bookmark-clicked.png", place: "Street" },
    { src: "/images/bookmark-clicked.png", place: "Hotel" },
]

const SituationSelect = () => {
    return (
        <div className={styles["pageContainer"]}>
            <BackButton />
            <h3 className={styles["h3"]}>Practice Conversations</h3>
            <div className={styles["grid-container"]}>

                {situations.map((item, index) => (
                    <SituationCard key={index} imgSrc={item.src} situation={item.place}
                    />
                ))}
            </div>
        </div>
    );
};

export default SituationSelect;
