import React from "react";
import BackButton from "../components/Details/BackButton"
import Card from "../components/PracitceTest/Card"
import SituationCard from "../components/PracitceTest/Speaking/SituationCard";
const titles = [
    { subject: "English practice", title: "Conversation practice", description: "You can learn expressions", navigateTo: "../../src/pages/Practice/SituationSelect" },
    { subject: "Quiz", title: "Australian Culture Quiz", description: "You can take fun quizzes about Australia!" },
]

const Test = () => {
    return (
        <div className="all-container">
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px"
            }}>
                <img src="/images/logo.png" style={{ width: "100px", height: "24px" }}></img>
            </div>
            {titles.map((item, index) => (
                <Card
                    key={index}
                    subject={item.subject}
                    title={item.title}
                    description={item.description}
                    navigateTo={item.navigateTo}
                />
            ))}

        </div>
    )
}
export default Test;