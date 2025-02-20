import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../components/Mypage/ProfileCard";
import FeatureCard from "../components/Mypage/FeatureCard";

const titles = ["Bookmark List", "Change Language", "Log Out"];

export default function Mypage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // localStorage에서 user 정보 가져오기
    }
  }, []);



  return (
    <div>
      {/* 사용자 정보가 있을 경우에만 표시 */}
      <ProfileCard useName={user ? user.username : "Guest"} />

      <div
        style={{
          width: "100%",
          height: "12px",
          backgroundColor: "#FFF59D",
          margin: "20px 0",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "8px",
        }}
      >
        {titles.map((item, index) => (
          <FeatureCard
            title={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};


