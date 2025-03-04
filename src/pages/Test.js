import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/PracitceTest/Card"
const titles = [
    { subject: "English Practice", title: " You can learn expressions", src: "practiceLogo" },
    { subject: "Australia Culture Quiz", title: "You can take fun quizzes about Australia!", src: "cultureQuizImg" },
]

const Test = () => {
    return (
        <div className="all-container">
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "63px"
            }}>
                <img src="/images/logo.png" style={{ width: "100px", height: "24px" }}></img>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                gap: "16px",
                margin: "auto",
                padding: "0 20px",
                marginTop: "28px"
            }}>
                {titles.map((item, index) => (
                    <Card
                        key={index}
                        subject={item.subject}
                        title={item.title}
                        src={item.src}
                    />
                ))}
            </div>

        </div>
    )
}
export default Test;