import React, { useEffect, useState } from "react";
import BackButton from "../../components/Details/BackButton";
import SubBanner from "../../components/Home/subBanner";
import DetailInfo from "../../components/Home/DetailInfo";
import InformationCard from "../../components/Home/InformationCard";
import styled from "styled-components";
import { data } from "react-router-dom";

const BackColor = styled.div`
background-color: #FFF;
min-height: 100vh;
width: 100%;
padding: 0.1px;
`
const ScrollContainer = styled.div`
  overflow-y: scroll;
  max-height: 65vh;

  &::-webkit-scrollbar {
    width: 8px;  
  }

  &::-webkit-scrollbar-track {
    background: transparent;  
  }  
`;


const InformationStyle = styled.div`
    display : flex;
    flex-direction : column;
    padding-left : 20px;
    row-gap : 12px;
    margin-bottom : 22px;
`

export default function InfoDetail() {
    const [informations, setInformations] = useState([]);
    useEffect(() => {
        fetch("/data/recommend.json")
            .then((response) => response.json())
            .then((data) => setInformations(data.slice(0, 3)))
            .catch((error) => console.error("error", error))
    })

    return (
        <BackColor>
            <SubBanner />
            <ScrollContainer>
                <DetailInfo />
                <div style={{ height: "12px", width: "100%", backgroundColor: "#FFF59D", margin: "20px 0" }}></div>
                <div style={{ paddingLeft: "20px", fontSize: "24px", fontWeight: "500", marginBottom: "20px" }}>Other information</div>

                <InformationStyle>
                    {informations.map((item, index) => (
                        <InformationCard key={index}
                            src={item.thumbnail}
                            title={item.title}
                            subTitle={item.subTitle}
                            type={item.category}
                        />
                    ))}
                </InformationStyle>
            </ScrollContainer>
        </BackColor >
    )
}