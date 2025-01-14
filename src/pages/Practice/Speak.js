import React from "react";
import BackButton from "../../components/Details/BackButton";
import SpeakQuestionCard from "../../components/PracitceTest/Speaking/SpeakQuestionCard";
export default function Speak() {
    return (
        <div>
            <BackButton />
            <SpeakQuestionCard question={"Hi my name is Jin"} />
        </div>
    )
}