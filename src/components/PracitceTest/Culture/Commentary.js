import React from "react";

export default function Commentary({ correctAnswer, explanation, lastMent }) {
    return (
        <div style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: "180px",
            width: "335px",
            height: "220px",
            backgroundColor: "white",
            padding: "30px 44px 0 44px"
        }}>
            <p style={{ fontSize: "24px", fontWeight: "600" }}>{correctAnswer}</p>
            <p style={{ fontSize: "18px", fontWeight: "500", marginTop: "16px" }}>{explanation}</p>
            <p>{lastMent}</p>
        </div>
    )
}