import React from "react";
import styled from "styled-components";
import Logo from "../../components/Details/Logo";
import Input from "../../components/Login/Input";
import SignBtn from "../../components/Login/SignBtn";
export default function SinUp() {
    const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;
    `
    const placeholderList = ["User Name", "E-mail", "Password", "Confirm Password"]

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Logo />
            </div>

            <InputStyle>
                {placeholderList.map((item, index) => (
                    <Input placeholder={item} type={item.includes("Password") ? "password" : "text"} key={index} />
                ))}
            </InputStyle>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "160px" }}>
                <SignBtn title={"SIGN UP"} page={"/Login"} />
            </div>
        </div>
    )
}