import React from 'react';
import styles from "../../styles/BackButton.module.css"
import { useNavigate, useLocation } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        switch (location.pathname) {
            case '/Test':
                navigate('/');
                break;

            default:
                navigate(-1);
        }
    };

    return (
        <div className={styles.BackButton} onClick={handleBack}>
            <img src='/images/prev.png'></img>
        </div>
    );
}
export default BackButton;
