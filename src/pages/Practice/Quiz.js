import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/Details/BackButton";
import Result from "../../components/PracitceTest/Culture/Result";
import Question from "../../components/PracitceTest/Culture/Question";

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/data/questions.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("fetch 실패");
                }
                return response.json();
            })
            .then((data) => {
                setQuestions(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleChoiceClick = (choice) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (choice === currentQuestion.correct) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleNextClick = () => {
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsCorrect(null);
        } else {
            setIsFinished(true);
        }
    };

    if (loading) {
        return console.log("loading 중");
    }

    if (error) {
        return console.log("에러..");
    }

    if (isFinished) {

        return (
            <div>
                <BackButton />
                <Result
                    classTitle={"finishImg"}
                    imgsrc={"/images/finish.png"}
                    explanation={
                        <>
                            Good job ! <br />
                            You know a lot of things <br />
                            about Astlaila!
                        </>
                    }
                    btnTitle={"Done"}
                    next={() => { navigate("/Test") }}
                />
            </div>
        );
    }
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            {isCorrect === null ? (
                // 문제 
                <div>
                    <BackButton />
                    <Question
                        questionIndex={currentQuestionIndex}
                        question={currentQuestion.question}
                        choices={currentQuestion.choice}
                        onChoiceClick={handleChoiceClick}
                    />
                </div>
            ) : isCorrect ? (
                // 정답 
                <div>
                    <BackButton />
                    <Result
                        classTitle={"correctImg"}
                        imgsrc={"/images/correct.png"}
                        correct={currentQuestion.correct}
                        explanation={currentQuestion.explanation}
                        next={handleNextClick}
                        btnTitle={"Next"}
                    />
                </div>
            ) : (
                // 오답  
                <div>
                    <BackButton />
                    <Result
                        classTitle={"notCorrectImg"}
                        imgsrc={"/images/notCorrect.png"}
                        correct={currentQuestion.correct}
                        explanation={currentQuestion.explanation}
                        next={handleNextClick}
                        btnTitle={"Next"}
                    />
                </div>
            )}
        </div>
    );
};


