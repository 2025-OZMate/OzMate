import React from "react";
import styled from "styled-components";


const ImgWrapper = styled.div`
    width: 115px;
    height: 119px;
`;

export default function TestIcon({ src }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            margin: "52px 0 50px 0px",
        }}>
            <ImgWrapper>
                <img src={src} alt="icon" />
            </ImgWrapper>
        </div>

    );
}
