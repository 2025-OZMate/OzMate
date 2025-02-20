import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100vw;
  height: 7vh;
  border: none;
  border-radius: 10px;
  background: var(--primary-color, #ffb600);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  ${(props) =>
    props.variant === "Retry" &&
    `background: var(--retry-bg-color, #FFF59D);
    color: #FFB600;`}
`;

export default function NextBtn({ text, type, onClick, variant }) {
  return (
    <Container>
      <Button type={type} onClick={onClick} variant={variant}>
        {text}
      </Button>
    </Container>
  );
}
