import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // i18next의 i18n 객체를 사용해 언어 변경
import BackButton from "../../components/Details/BackButton";
import TitleHeader from "../../components/Mypage/titleHeader";
import LanguageToggle from "../../components/Mypage/LanguageToggle";

export default function Language() {
  const { i18n } = useTranslation(); // i18next의 i18n 객체를 사용해 언어 변경
  const [activeLanguage, setActiveLanguage] = useState(i18n.language); // 현재 언어로 초기화

  const handleToggle = (language) => {
    const newLang = language === "English" ? "en" : "ko"; // 'English'는 'en'으로, '한국어'는 'ko'로 설정
    setActiveLanguage(newLang); // activeLanguage를 새 언어로 설정
    i18n.changeLanguage(newLang); // i18next로 언어를 변경
  };

  return (
    <div>
      <BackButton />
      <TitleHeader title={"Change Language"} />
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
        }}
      >
        <LanguageToggle
          language={"한국어"}
          isActive={activeLanguage === "ko"} // 한국어가 활성화되었는지 확인
          onToggle={() => handleToggle("한국어")} // 한국어 토글
        />
        <LanguageToggle
          language={"English"}
          isActive={activeLanguage === "en"} // 영어가 활성화되었는지 확인
          onToggle={() => handleToggle("English")} // 영어 토글
        />
      </div>
    </div>
  );
}
