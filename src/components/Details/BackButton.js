import React from 'react';
import styles from "../../styles/BackButton.module.css"
import { useNavigate, useLocation } from 'react-router-dom';

function BackButton({ customNavigate, imgSrc = "/images/prev.png" }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        if (customNavigate) {
            customNavigate();
        } else {
            switch (location.pathname) {
                case '/Test':
                    navigate('/');
                    break;

                default:
                    navigate(-1);
            }
        }
    };

    return (
        <div className={styles.BackButton} onClick={handleBack}>
            <img src={imgSrc}></img>
        </div>
    );
}
export default BackButton;
