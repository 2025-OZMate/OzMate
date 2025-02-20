import React, { useState, useEffect } from "react";
import styles from "../../styles/Practice/Trans.module.css";
import BackButton from "../../components/Details/BackButton";
import ProgressBar from "../../components/PracitceTest/Trans/ProgressBar";
import Result from "../../components/PracitceTest/Culture/Result";
import NextBtn from "../../components/Details/NextBtn";
import { useNavigate } from "react-router-dom";

export default function Translation() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/translation.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      questions[currentQuestion].correct.some(
        (answer) => answer === userInput.trim()
      )
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserInput("");
      setIsCorrect(null);
    } else {
      setIsFinished(true); // finish 화면
    }
  };

  const handleRetry = () => {
    setUserInput("");
    setIsCorrect(null);
  };

  if (!questions.length) return console.log("로 딩 중 ~");

  if (isFinished) {
    return (
      <div>
        <BackButton />
        <Result
          classTitle={"finishImg"}
          imgsrc={"/images/finish.png"}
          explanation={
            <>
              Good job! <br />
              You know a lot of things <br />
              about English Sentence!
            </>
          }
          btnTitle={"Done"}
          next={() => {
            navigate("/Test");
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles["all-container"]}>
      <div style={{ display: "flex", columnGap: "8px", padding: "0 20px 29px 20px" }}>
        <img src="/images/prev.png" onClick={() => navigate(-1)}
          style={{ width: "40px", height: "40px", marginTop: "14px" }}></img>
        <ProgressBar
          currentQuestion={currentQuestion}
          questionsLength={questions.length}
        />
      </div>

      <div className={styles["question-container"]}>
        <div>
          <div className={styles.questionCard}>
            <p>
              {currentQuestion + 1} / {questions.length}
            </p>
            <p>{questions[currentQuestion].question}</p>
          </div>
        </div>
        {isCorrect === null && (
          <div className={styles["block-container"]}>
            {questions[currentQuestion].block.map((word, index) => (
              <p key={index} className={styles["word-block"]}>
                {word}
              </p>
            ))}
          </div>
        )}

        {isCorrect === true && (
          <div className={styles["emoji-container"]}>
            <img src="/images/correct.png" className={styles.correct}></img>
          </div>
        )}

        {isCorrect === false && (
          <div className={styles["emoji-container"]}>
            <img
              src="/images/notCorrect.png"
              className={styles.notCorrect}
            ></img>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <div className={styles["inputContainer"]}>
            <input
              type="text" value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Please enter the correct answer as text."
              style={{
                border:
                  isCorrect === null
                    ? "1px solid #FFB600"
                    : isCorrect
                      ? "1px solid var(--2CE32C, #2CE32C)"
                      : "1px solid var(--FF0, #F00)",
              }}
              required
            />
          </div>

          <div className={styles.OkBtn}>
            {isCorrect === null && <NextBtn text={"OK"} type={"submit"} />}
          </div>
        </form>

        {isCorrect !== null && (
          <div>
            <div className={styles.RetryBtn}>
              {isCorrect === false && (
                <NextBtn
                  text={"Retry"}
                  type={"button"}
                  onClick={handleRetry}
                  variant={"Retry"}
                />
              )}
            </div>
            <div className={styles.OkBtn}>
              <NextBtn text={"Next"} type={"button"} onClick={handleNext} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
