import React from "react";
import BackButton from "../../components/Details/BackButton";
import TestIcon from "../../components/Details/TestIcon";
import Commentary from "../../components/PracitceTest/Culture/Commentary";
import NextBtn from "../../components/Details/NextBtn";

export default function CorrectPage() {
    return (
        <div>
            <BackButton />
            <TestIcon src={"/images/correct.png"} />
            <Commentary correctAnswer={"Good day"} explanation={"This day celebrates the founding of Australia and is marked  "} />
            <NextBtn text={"Next"}></NextBtn>

        </div>
    )
}