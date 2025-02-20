import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Login/Login.module.css"
import axios from "axios";
import Logo from "../../components/Details/Logo";

export default function Login() {
    const [form, setForm] = useState({ username: "", userid: "", password: "" });
    const navigate = useNavigate()
    const handleSignUp = () => { navigate("/register") }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(form)
        try {
            const res = await axios.post("http://localhost:5000/auth/login", form);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user)); //사용자 정보 저장

            //alert("Login successful!");
            window.location.href = "/Home";
        } catch (error) {
            alert("User not found.");
            setForm({ userid: "", password: "" })
        }
    };

    return (
        <div>
            <Logo />
            <form onSubmit={handleSubmit} className={styles.FormContainer}>
                <div className={styles.inputContainer}>
                    <input type="text" name="userid" placeholder="User ID"
                        onChange={handleChange}
                        value={form.userid} required
                        className={styles.input}
                    />

                    <input
                        type="password" name="password"
                        placeholder="Password"
                        onChange={handleChange} value={form.password} required
                        className={styles.input}
                    />
                </div>
                <div className={styles.btnContainer}>
                    <button type="submit" className={styles.btn}>SIGN IN</button>
                    <button type="button"
                        className={styles.btn} onClick={handleSignUp}
                        style={{ backgroundColor: "#FFF", color: "#FFB600" }}
                    >SIGN UP</button>
                </div>
            </form >
        </div>
    );
};
