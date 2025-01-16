import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Login/Login.module.css"
import Logo from "../../components/Details/Logo"
import Input from "../../components/Login/Input";
import SignBtn from "../../components/Login/SignBtn";

const Login = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/SignUP")
    }
    return (
        <div className={styles.allContainer}>
            <Logo></Logo>
            <form className={styles.form}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "12px"
                }}>
                    <Input placeholder={"E-mail"} type={"text"} />
                    <Input placeholder={"Password"} type={"password"} />
                </div>

                <div style={{
                    display: "flex", flexDirection: "column", rowGap: "12px", position: "absolute",
                    top: "80%"
                }}>

                    <SignBtn page={"/Home"} title={"SIGN IN"} />
                    <div onClick={handleClick} className={styles.signup}>SIGN UP</div>
                </div>

            </form >
        </div >
    );
};

export default Login;