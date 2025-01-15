import React from "react";

export default function titleHeader({ title }) {
    return (
        <div style={{
            fontSize: "24px",
            fontWeight: "500",
            margin: "20px 0 20px 20px"
        }}>{title}</div>
    )
}