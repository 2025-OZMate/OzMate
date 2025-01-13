import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
display: flex;
padding: 18px 0 18px 20px;
 
 width: 335px;
height: 62px;
justify-content: space-between;
align-items: center;
margin-left : 20px;
border-radius: 10px;
background: var(--FFF, #FFF);
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
`

const TitleStyle = styled.div`
font-size: 14px;
font-weight: 500;
`

export default function FeatureCard({ title, src }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/") //링크
    }
    return (
        <Container>
            <TitleStyle>{title}</TitleStyle>
            <img src="/images/next.png"
                style={{ width: "26px", height: "24px", marginRight: "12px" }}
                onClick={handleClick}></img>
        </Container >
    )
}