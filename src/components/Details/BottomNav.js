import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/NavBottom.module.css";

const BottomNav = () => {
    const icons = [
        { name: "test", path: "/Test", defaultImg: "/images/test.png", clickedImg: "/images/test-clicked.png" },
        { name: "home", path: "/Home", defaultImg: "/images/home.png", clickedImg: "/images/home-clicked.png" },
        { name: "mypage", path: "/Mypage", defaultImg: "/images/mypage.png", clickedImg: "/images/mypage-clicked.png" },
    ];

    const location = useLocation();

    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {icons.map((icon) => (
                        <li key={icon.name}>
                            <Link to={icon.path}>
                                <img
                                    src={location.pathname === icon.path ? icon.clickedImg : icon.defaultImg}
                                    alt={icon.name}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default BottomNav;
