import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Details/Logo";
import styles from "../../styles/Login/SignUp.module.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [idError, setIdError] = useState("");
  const navigate = useNavigate();

  // 유효성 체크
  const handleIdChange = (e) => {
    const inputId = e.target.value;
    setId(inputId);

    const existingUser = localStorage.getItem(inputId);
    if (existingUser) {
      setIdError("This ID has already been registered.");
    } else {
      setIdError("");
    }
  };

  const handleSignUp = () => {
    if (!username || !id || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      setError("Password does not match.");
      return;
    }

    const existingUser = localStorage.getItem(id);
    if (existingUser) {
      setError("This ID has already been registered.");
      return;
    }

    // 회원가입 정보 저장
    const newUser = { username, id, password };
    localStorage.setItem(id, JSON.stringify(newUser));

    alert("Signup is complete!");
    setUsername("");
    setId("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    navigate("/Login");
  };

  return (
    <div className={styles["all-container"]}>
      <Logo />
      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles["form-container"]}
      >
        <div>
          <input
            placeholder="User Name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="User ID"
            type="text"
            value={id}
            onChange={handleIdChange}
            required
          />
          {idError && (
            <p
              style={{ color: "red", fontSize: "12px", margin: "4px 0 0 4px" }}
            >
              {idError}
            </p>
          )}{" "}
        </div>
        <div>
          <input
            placeholder="User Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <p style={{ color: "red", fontSize: "12px", margin: "4px 0 0 4px" }}>
            {error}
          </p>
        )}
        <button onClick={handleSignUp}>SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUp;
