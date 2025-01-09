import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavBottom.module.css";
import reset from "../../styles/Style.module.css";

const BottomNav = () => {
    const icons = [
        { name: "test", path: "/Test", defaultImg: "/images/test.png", clickedImg: "/images/test-clicked.png" },
        { name: "home", path: "/Home", defaultImg: "/images/home.png", clickedImg: "/images/home-clicked.png" },
        { name: "mypage", path: "/Mypage", defaultImg: "/images/mypage.png", clickedImg: "/images/mypage-clicked.png" },
    ];

    const [activeIcon, setActiveIcon] = useState("");

    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {icons.map((icon) => (
                        <li key={icon.name}>
                            <Link to={icon.path} onClick={() => setActiveIcon(icon.name)}>
                                <img
                                    src={activeIcon === icon.name ? icon.clickedImg : icon.defaultImg}
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
