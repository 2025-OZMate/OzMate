import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Mypage/FeatureCard.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TitleStyle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ title }) => (title === "Log Out" ? "red" : "black")};
`;

export default function FeatureCard({ title }) {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    const actions = {
      "Log Out": () => setShowLogoutPopup(true),
      "Bookmark List": () => navigate("/BookMark"),
      "Change Language": () => navigate("/Language"),
    };

    if (actions[title]) {
      actions[title](); // title에 해당하는 함수가 존재하면 실행
    } else {
      console.warn(`No action defined for title: ${title}`);
    }
  };

  const handleClosePopup = () => {
    setShowLogoutPopup(false);
  };

  //로그아웃
  const LogOutOk = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/Login");
  };

  const NotLogOut = () => {
    handleClosePopup();
    navigate("/Mypage");
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <div className={styles["container"]} onClick={handleClick}>
        <TitleStyle title={title}>{title}</TitleStyle>
        {title !== "Log Out" && (
          <img
            src="/images/next.png"
            style={{ width: "26px", height: "24px", marginRight: "12px" }}
            alt="next"
          />
        )}
      </div>

      {/* 로그아웃 팝업 */}
      {showLogoutPopup && (
        <div className={styles["LogoPopup"]}>
          <div className={styles["popup"]}>
            <p>{t("logout_prompt")}</p>
            <p>{t("logout_warning")}</p>

            <div className={styles["select-container"]}>
              <div className={styles.cancel} onClick={NotLogOut}>
                {t("cancel")}
              </div>
              <div className={styles.ok} onClick={LogOutOk}>
                {t("ok")}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
