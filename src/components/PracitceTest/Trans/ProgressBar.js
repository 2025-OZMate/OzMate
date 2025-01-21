import React from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  max-width: 287px;
  background-color: #FFF59D;
  border-radius: 10px;
  padding : 3px 0 3px 3px;
  margin: 20px 0;
  margin-top: 25px;
`;


const Progress = styled.div`
  width: ${({ progress }) => progress}%;
  height: 10px;
  background-color: #FFB600;
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;

export default function ProgressBar({ currentQuestion, questionsLength }) {
  const progress = ((currentQuestion + 1) / questionsLength) * 100;

  return (
    <ProgressContainer>
      <Progress progress={progress} />
    </ProgressContainer>
  );
}
