import React from "react";

function profileCard({ useName }) {
    return (
        <div style={{
            display: "flex", padding: "40px 0 0 20px",
            columnGap: "20px", alignItems: "center",
        }}>
            <img src="/images/profile.png" style={{ width: "80px", height: "80px", }}></img>

            <div style={{ textAlign: "center", fontSize: "17px" }}>{useName}</div>
        </div>
    )
}
export default profileCard;

