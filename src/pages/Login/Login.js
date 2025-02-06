import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Login/Login.module.css";
import Logo from "../../components/Details/Logo";
const Login = () => {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = () => navigate("/SignUp");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.clear();

    if (!username || !id || !password) {
      setError("Please fill out all fields.");
      return;
    }

    const user = localStorage.getItem(id);

    if (!user) {
      setError("ID does not exist.");
      return;
    }

    const parsedUser = JSON.parse(user);
    if (parsedUser.username !== username) {
      setError("The username you entered does not match.");
      return;
    }

    if (parsedUser.password !== password) {
      setError("Password is incorrect.");
      return;
    }
    localStorage.setItem("username", parsedUser.username);
    navigate("/Home");
  };

  return (
    <div className={styles.allContainer}>
      <Logo />
      <form onSubmit={handleLogin} className={styles.formContainer}>
        <div>
          <input
            placeholder="Username"
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
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <p style={{ color: "red", fontSize: "12px", marginLeft: "4px" }}>
            {error}
          </p>
        )}

        <div className={styles.btnContainer}>
          <button type="submit">SIGN IN</button>
          <button type="submit" onClick={handleClick}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
