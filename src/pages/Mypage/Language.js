import React, { useState } from "react";
import BackButton from "../../components/Details/BackButton";
import TitleHeader from "../../components/Mypage/titleHeader";
import LanguageToggle from "../../components/Mypage/LanguageToggle";

export default function Language() {
    const [activeLanguage, setActiveLanguage] = useState(null);
    const handleToggle = (language) => {
        setActiveLanguage((prev) => (prev === language ? null : language))
    }

    return (
        <div>
            <BackButton />
            <TitleHeader title={"Change Language"} />
            <div style={{
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                rowGap: "12px"
            }}>
                <LanguageToggle
                    language={"한국어"}
                    isActive={activeLanguage === "한국어"}
                    onToggle={() => handleToggle("한국어")}
                />
                <LanguageToggle
                    language={"English"}
                    isActive={activeLanguage === "English"}
                    onToggle={() => handleToggle("English")}
                />
            </div>
        </div>
    )
}