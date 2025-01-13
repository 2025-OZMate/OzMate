import { Link } from "react-router-dom";
import styles from "../../styles/Login/Login.module.css"
import Logo from "../../components/Details/Logo"
import SignInButton from "../../components/Login/SignInButton";
import SignUpButton from "../../components/Login/SignUpButton"
import Input from "../../components/Login/Input";
const Login = () => {
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
                    <div className={styles.forgotPassword}><Link to={"/Find"}>Forgot Password</Link ></div>
                </div>

                <SignInButton></SignInButton>
                <SignUpButton></SignUpButton>
            </form >
        </div >
    );
};

export default Login;