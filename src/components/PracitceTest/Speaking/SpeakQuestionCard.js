import React from "react";
import styled from "styled-components";

const CardCss = styled.div`
display: flex;
width: 100%;
max-width: 335px;
height: 200px;
margin: auto;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #FFF;
margin-top : 29px;
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
`

const QuestionCard = styled.div`
    width: 282px;
    height: 84px;
    text-align: center;
`
function SpeakQuestionCard({ question }) {
    return (
        <CardCss>
            <div>
                <QuestionCard>{question}</QuestionCard>
            </div>
        </CardCss>
    )
}
export default SpeakQuestionCard