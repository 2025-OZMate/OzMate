import React, { useEffect, useState } from "react";
import Banner from "../components/Home/banner";
import Category from "../components/Home/Category";
import InformationCard from "../components/Home/InformationCard";
import styles from "../styles/MainHome/Banner.module.css"
import { data } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const types = ["ALL", "POLICY", "LIFE"];
    const [informations, setInformations] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("/data/recommend.json")
            .then((response) => response.json())
            .then((data) => setInformations(data))
            .catch((error) => console.error("error발생", error))
    }, [])

    const handleCardClick = (index) => {
        if (index === 0) {
            navigate("/InfoDetail")
        }
    }

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
                    <div
                        key={index}
                        onClick={() => handleCardClick(index)}
                    >
                        <InformationCard
                            src={item.thumbnail}
                            title={item.title}
                            subTitle={item.subTitle}
                            type={item.category}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home; 