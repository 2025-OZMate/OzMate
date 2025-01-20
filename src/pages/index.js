import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Login")
    }

    return (
        <div onClick={handleClick} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <img src="/images/logo.png" style={{ width: "184px", height: "45px" }}></img>
        </div>
    )
}