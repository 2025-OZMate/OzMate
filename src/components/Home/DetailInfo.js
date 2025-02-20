import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../../styles/MainHome/DetailInfo.module.css";
import InformationCard from "./InformationCard";
import BackButton from "../Details/BackButton";

export default function DetailInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState(null);
    const [otherInfo, setOtherInfo] = useState([]);

    useEffect(() => {
        console.log(id); // id 값 확인

        fetch("/data/recommend.json")
            .then((res) => res.json())
            .then((recommendations) => {
                const selectedInfo = recommendations.find((info) => info.id === Number(id)); // id를 숫자로 변환
                console.log("Selected Info:", selectedInfo); // selectedInfo 확인

                if (selectedInfo) {
                    fetch("/data/mockData.json")
                        .then((res) => res.json())
                        .then((mockData) => {
                            const detailData = mockData.find((item) => item.id === Number(id)); // id를 숫자로 변환
                            console.log("Detail Data:", detailData); // detailData 확인

                            if (detailData) {
                                setDetail({ ...selectedInfo, details: detailData.details, });
                            }

                            //랜덤 
                            const filteredInfo = recommendations.filter((item) => item.id !== Number(id));
                            const randomInfo = getRandomItems(filteredInfo, 3);
                            setOtherInfo(randomInfo);
                        });
                }
            });
    }, [id]);

    //랜덤 함수
    const getRandomItems = (array, numItems) => {
        const shuffled = array.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, numItems);
    };

    if (!detail) return <div></div>;

    return (
        <div className={styles["detail-container"]}>
            <div className={styles.backBtn}><BackButton className={styles["back-button"]} onClick={() => navigate(-1)} /></div>
            <img src={detail.thumbnail} alt={detail.title} className={styles["banner-img"]} />

            <div>
                <div className={styles.allContainer}>
                    <span className={styles.category}>{detail.category}</span>
                    <h2>{detail.title}</h2>
                    <ul>
                        {detail.details.map((item, index) => (
                            <li key={index} style={{ marginTop: "18px" }}>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.subTitle}>{item.subTitle}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className={styles.line}></div>
                    <div style={{ padding: "20px 20px 30px 20px" }}>
                        <p style={{ fontSize: "24px", fontWeight: "500", marginBottom: "20px" }}>Other information</p>

                        <div className={styles.otherInfoContainer}>
                            {otherInfo.map((info) => (
                                <div key={info.id} onClick={() => navigate(`/detail/${info.id}`)} style={{ cursor: "pointer" }}>
                                    <InformationCard
                                        id={info.id}
                                        title={info.title}
                                        subTitle={info.subTitle}
                                        type={info.category}
                                        src={info.thumbnail}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


