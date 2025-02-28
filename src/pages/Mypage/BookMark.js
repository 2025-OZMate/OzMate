import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InformationCard from "../../components/Home/InformationCard"
import BackButton from "../../components/Details/BackButton"
import TitleHeader from "../../components/Mypage/titleHeader"

export default function Bookmarks() {
    const [bookmarks, setBookmarks] = useState([]);
    const userId = localStorage.getItem("userObjectId");
    const navigate = useNavigate();


    useEffect(() => {
        // 서버에서 북마크 정보 가져오기
        if (userId) {
            axios.get(`http://localhost:5000/auth/getUserBookmarks/${userId}`)
                .then(response => {
                    console.log("가져온 data: ", response.data)
                    setBookmarks(response.data);
                })
                .catch(error => console.error("북마크 불러오기 실패:", error));
        }
    }, [userId]);

    const handleCardClick = (id, e) => {
        if (!e.target.closest('button')) {
            navigate(`/detail/${id}`)
        }
    }
    return (
        <div  >
            <BackButton />
            <TitleHeader title={"BookMark"} />
            <div style={{ padding: "0 20px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {bookmarks.map((bookmark, index) => (
                    <InformationCard
                        key={bookmark.id}
                        id={bookmark.id}
                        src={bookmark.thumbnail}
                        title={bookmark.title}
                        description={bookmark.description}
                        type={bookmark.category}
                        onClick={(e) => handleCardClick(bookmark.id, e)}
                    />
                ))}
            </div>
        </div>
    );
}
