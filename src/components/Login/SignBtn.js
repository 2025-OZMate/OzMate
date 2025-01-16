import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignBtn({ title, page, className }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(page);
    }

    const ButtonStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--FFF, #FFF);
        font-weight: 600;
        text-align: center;
        width: 335px;
        height: 52px;
        border-radius: 10px;
        background: var(--primary-clor, #FFB600);
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
    `

    return (
        <ButtonStyle>
            <div onClick={handleClick}>{title}</div>
        </ButtonStyle>
    )
}