import React from "react";
import ProfileCard from "../components/Mypage/ProfileCard";
import FeatureCard from "../components/Mypage/FeatureCard";

const titles = ["Bookmark List", "Change Language", "Log Out"];

const Mypage = () => {
    return (
        <div>
            <ProfileCard />
            <div style={{ width: "100%", height: "12px", backgroundColor: "#FFF59D", margin: "20px 0" }}></div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "8px"
            }}>
                {titles.map((item, index) => (<FeatureCard title={item} key={index} />))}
            </div>
        </div>
    )
}
export default Mypage;