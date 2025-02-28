import React, { useEffect, useState } from "react";
import Banner from "../components/Home/banner";
import Category from "../components/Home/Category";
import InformationCard from "../components/Home/InformationCard";
import styles from "../styles/MainHome/Banner.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const types = ["ALL", "POLICY", "LIFE"];
  const [allRecommendations, setAllRecommendations] = useState([]);  // 전체 데이터 저장
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);  // 필터링된 데이터
  const [activeCategory, setActiveCategory] = useState("ALL");
  const userId = localStorage.getItem("userObjectId");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/recommend.json")
      .then((response) => response.json())
      .then((data) => {
        setAllRecommendations(data);
        setFilteredRecommendations(data);  // 초기에는 전체 데이터를 보여줌
      })
      .catch((error) => console.error("Error loading recommendations", error));
  }, []);

  const handleCategoryClick = (type) => {
    setActiveCategory(type);

    if (type === "ALL") {
      setFilteredRecommendations(allRecommendations); // 전체 데이터 다시 보여주기
    } else {
      setFilteredRecommendations(allRecommendations.filter((item) => item.category === type));
    }
  };

  const handleCardClick = (id, e) => {
    if (!e.target.closest('button')) {
      navigate(`/detail/${id}`);
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

      {/* 필터링된 추천 카드 표시 */}
      <div className={styles["card-container"]}>
        {filteredRecommendations.map((item) => (
          <div key={item.id} onClick={(e) => handleCardClick(item.id, e)} style={{ width: "100%" }}>
            <InformationCard
              src={item.thumbnail}
              title={item.title}
              description={item.subTitle}
              type={item.category}
              id={item.id}
              userId={userId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
