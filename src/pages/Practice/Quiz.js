import React, { useState, useEffect } from "react";
import BackButton from "../../components/Details/BackButton";
import QuestionCard from "../../components/PracitceTest/Culture/QuestionCard";
import Answers from "../../components/PracitceTest/Culture/Answers";
import styles from "../../styles/Practice/answerBtn.module.css"


const Quiz = () => {
    return (
        <div>
            <BackButton />
            <QuestionCard description="The traditional Australian instrument Didgeridoo originates from which culture?" number={"1"} />
            <div className={styles["answers-container"]}>
                <Answers answer={'hi'} />
                <Answers answer={'hi'} />
                <Answers answer={'hi'} />
                <Answers answer={'hi'} />


            </div>
        </div >
    )
}
export default Quiz;