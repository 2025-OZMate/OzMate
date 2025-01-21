import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../Details/BackButton";
export default function SubBanner() {
    const navigate = useNavigate();

    return (
        <div>
            <img src="/images/card.png" style={{ height: "280px" }}></img>
            <div style={{
                position: "absolute",
                top: "3%"
            }}>
                <BackButton customNavigate={() => navigate("/Home")} imgSrc="/images/prev-white.png" />
            </div>
        </div>
    )
}