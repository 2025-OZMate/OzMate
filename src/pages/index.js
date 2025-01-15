import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Details/Logo";
export default function Index() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Login")
    }

    return (
        <div
            onClick={handleClick}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Logo />
        </div>
    )
}