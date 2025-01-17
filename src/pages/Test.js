import React from "react";
import Card from "../components/PracitceTest/Card"
const titles = [
    { subject: "English practice", title: "Conversation practice", description: "You can learn expressions" },
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
                />
            ))}

        </div>
    )
}
export default Test;