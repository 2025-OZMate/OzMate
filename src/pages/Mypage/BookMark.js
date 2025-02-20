import React, { useEffect, useState } from "react";
import BackButton from "../../components/Details/BackButton";
import TitleHeader from "../../components/Mypage/titleHeader";
import InformationCard from "../../components/Home/InformationCard";

export default function BookMark() {

    return (
        <div>
            <BackButton />
            <TitleHeader title="Bookmark List" />

        </div>
    )
}