import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Mypage/FeatureCard.module.css"
import { useNavigate } from "react-router-dom";

const TitleStyle = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ title }) => (title === "Log Out" ? "red" : "black")};
`;

export default function FeatureCard({ title }) {
    const navigate = useNavigate();
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    const handleClick = () => {
        const actions = {
            "Log Out": () => setShowLogoutPopup(true),
            "Bookmark List": () => navigate("/BookMark"),
            "Change Language": () => navigate("/Language"),
        };

        actions[title]?.();
    };

    const handleClosePopup = () => {
        setShowLogoutPopup(false);
    };

    const LogOutOk = () => { navigate("/Login") }
    const NotLogOut = () => {
        handleClosePopup();
        navigate("/Mypage");
    }

    return (
        <div>
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
                <div className={styles["LogoPopup"]} LogoutPopup>
                    <div className={styles["popup"]}>
                        <p>Do you want to log out?</p>
                        <p>You’ll need to log in again.</p>

                        <div className={styles["select-container"]}>
                            <div className={styles.cancel} onClick={NotLogOut}>Cancel</div>
                            <div className={styles.ok} onClick={LogOutOk}>OK</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
