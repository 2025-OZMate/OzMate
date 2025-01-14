import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;  
`;

const Button = styled.button`
    width: 100%;
    height: 56px;
    border: none;
  max-width: 335px;
  border-radius: 10px;
  background: var(--primary-clor, #FFB600);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
 
`;

export default function NextBtn({ text }) {
    return (
        <Container>
            <Button>{text}</Button>
        </Container>
    );
}
