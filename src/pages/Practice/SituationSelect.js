import React from "react";
import BackButton from "../../components/Details/BackButton";
import SituationCard from "../../components/PracitceTest/Speaking/SituationCard";
import styles from "../../styles/Practice/SituationCard.module.css"

const situations = [
    { src: "/images/restaurant.png", place: "Resturant" },
    { src: "/images/hospital.png", place: "hospital" },
    { src: "/images/market.png", place: "Market" },
    { src: "/images/school.png", place: "School" },
    { src: "/images/street.png", place: "Street" },
    { src: "/images/hotel.png", place: "Hotel" },
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
