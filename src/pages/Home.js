import React, { useEffect, useState } from "react";
import Banner from "../components/Home/banner";
import Category from "../components/Home/Category";
import InformationCard from "../components/Home/InformationCard";
import styles from "../styles/MainHome/Banner.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const types = ["ALL", "POLICY", "LIFE"];
  const [informations, setInformations] = useState([]);
  const [filteredInformations, setFilteredInformations] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/recommend.json")
      .then((response) => response.json())
      .then((data) => {
        setInformations(data);
        setFilteredInformations(data); //모든 데이터
      })
      .catch((error) => console.error("error발생", error));
  }, []);

  //카테고리
  const handleCategoryClick = (type) => {
    setActiveCategory(type);
    if (type === "ALL") {
      setFilteredInformations(informations);
    } else {
      setFilteredInformations(
        informations.filter((item) => item.category === type)
      );
    }
  };

  const handleCardClick = (index) => {
    if (index === 0) {
      navigate("/InfoDetail");
    }
  };

  return (
    <div className={styles["all-container"]}>
      <Banner />
      <div className={styles["category-container"]}>
        {types.map((item, index) => (
          <Category
            key={index}
            type={item}
            isActive={item === activeCategory}
            onClick={() => handleCategoryClick(item)}
          />
        ))}
      </div>

      <div className={styles["card-container"]}>
        {filteredInformations.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{ width: "100%" }}
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
  );
};

export default Home;
