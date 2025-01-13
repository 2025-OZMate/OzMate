import { Link } from "react-router-dom";
import styles from "../../styles/Login/SignButton.module.css";

const SignInButton = () => {
    return (
        <div className={styles.signContainer}>
            <button className={styles.SignUpButton} type="submit">
                <Link to="/SignUp" className={styles.link}>SIGN UP</Link>
            </button>
        </div>
    );
};

export default SignInButton;
