import { useState } from "react";
import axios from "axios";
import styles from "../../styles/Login/Login.module.css"
import Logo from "../../components/Details/Logo"

export default function Registe() {
    const [form, setForm] = useState({ username: "", userid: "", password: "", passwordConfirm: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/register", form);
            alert("회원가입 성공!");
            window.location.href = "/login";
        } catch (error) {
            if (error.response) {
                alert("Password does not match.");
                setForm({ ...form, passwordConfirm: "" })
            } else if (error.request) {
                alert("서버로 요청을 보낼 수 없습니다.");
            } else {
                alert("알 수 없는 오류가 발생했습니다: " + error.message);
            }
        }
    };

    return (
        <div>
            <Logo />
            <form onSubmit={handleSubmit} className={styles.FormContainer}>
                <div className={styles.inputContainer}>
                    <input type="text" name="username"
                        placeholder="User Name" onChange={handleChange}
                        required className={styles.input}
                    />
                    <input
                        type="text" name="userid"
                        placeholder="User ID" onChange={handleChange}
                        required
                        className={styles.input}
                    />
                    <input required
                        type="password" name="password"
                        placeholder="Password" onChange={handleChange}
                        className={styles.input}
                    />
                    <input
                        type="password" name="passwordConfirm"
                        placeholder="Confirm Password" onChange={handleChange}
                        required value={form.passwordConfirm}
                        className={styles.input}
                    />
                </div>

                <div className={styles.signUpBtn}>
                    <button type="submit" className={styles.btn}>SIGN UP</button>
                </div>
            </form>
        </div>
    );
};
