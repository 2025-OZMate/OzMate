import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/MainHome/InformationCard.module.css";

export default function InformationCard({ src, title, description, type, id, onClick }) {
  console.log("address id: ", id)
  const [isBookmarked, setIsBookmarked] = useState(false);
  const userId = localStorage.getItem("userObjectId");
  const token = localStorage.getItem("token");

  const getUserBookmarks = () => {
    if (userId && token) {
      axios.get(`http://localhost:5000/auth/getUserBookmarks/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          const bookmarks = response.data;
          const isAlreadyBookmarked = bookmarks.some((bookmark) => bookmark.id === id);
          setIsBookmarked(isAlreadyBookmarked);
        })
        .catch((error) => {
          console.error("북마크 확인 실패:", error.response ? error.response.data : error.message);
        });
    }
  }

  useEffect(() => {
    getUserBookmarks();
  }, [userId, token, id]);

  const toggleBookmark = async () => {
    if (!userId || !token) {
      console.error("로그인되지 않았습니다.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/auth/toggleBookmark", {
        userId,
        bookmark: { id, title, thumbnail: src, category: type, description },

      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setIsBookmarked((prevState) => !prevState);
    } catch (error) {
      console.error("북마크 토글 실패:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className={styles["all-container"]} onClick={onClick}>
      <div>
        <img src={src} className={styles["viewImg"]} alt={title} />
      </div>

      <div style={{ padding: "12px 0 0 12px" }}>
        <p style={{ fontSize: "16px", fontWeight: "500" }}>{title}</p>
        <p style={{
          fontSize: "10px", margin: "4px 0 4px 0", paddingRight: "20px", flex: "wrap", whiteSpace: "pre-line"
        }}>
          {description}
        </p>

        <div className={styles.typeContainer}>
          <span className={styles["type"]}>{type}</span>
          <button onClick={toggleBookmark} className={styles.bookmark}>
            <img
              src={isBookmarked ? "/images/bookmark-clicked.png" : "/images/bookmark.png"}
              alt="Bookmark"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
