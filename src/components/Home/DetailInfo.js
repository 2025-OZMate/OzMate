import React, { useState, useEffect } from "react";
import styles from "../../styles/MainHome/DetailInfo.module.css";

export default function DetailInfo() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("/data/infoDetail.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching:", error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return console.log("loading");
    }

    if (data.length === 0) {
        return console.log("no data");
    }

    // 첫 번째 데이터만. 
    const { subject, mainTitle, details } = data[0];

    return (
        <div className={styles.container}>
            <span style={{ fontSize: "12px", color: "#777", }}>{subject}</span>
            <div style={{ fontSize: "24px", fontWeight: "600", margin: "20px 0" }}>{mainTitle}</div>
            <div className={styles.details}>
                {details.map((item, index) => (
                    <div key={index} className={styles.detailItem}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.subTitle}>{item.subTitle}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}
