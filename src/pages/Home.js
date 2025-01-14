import React from "react";
import Banner from "../components/Home/banner";
import Category from "../components/Home/Category";
import InformationCard from "../components/Home/InformationCard";
import styles from "../styles/MainHome/Banner.module.css"


const Home = () => {
    const types = ["ALL", "POLICY", "LIFE"];
    const informations = [
        { src: "/images/visa.png", title: "189 Visa", subTitle: " Skilled Independent Visa", type: "POLICY" },
        { src: "/images/dish.png", title: "Etiquette you need to know", subTitle: " How to reduce cultural differences and become friends with local people", type: "LIFE" },
        { src: "/images/seasons.png", title: "Australia's Seasons", subTitle: "Perfectly Adapting to Seasonal Characteristics", type: "LIFE" },
        { src: "/images/seasons.png", title: "189 Visa", subTitle: " Skilled Independent Visa", type: "POLICY" },

    ]
    return (
        <div className={styles["all-container"]}>
            <Banner />
            <div className={styles["category-container"]}>
                {types.map((item, index) => (
                    <Category key={index} type={item}></Category>
                ))}
            </div>

            <div className={styles["card-container"]}>
                {informations.map((item, index) => (
                    <InformationCard
                        key={index}
                        src={item.src}
                        title={item.title}
                        subTitle={item.subTitle}
                        type={item.type}
                    />
                ))}
            </div>
        </div>
    )
}
export default Home; 