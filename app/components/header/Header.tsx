import styles from "@/app/page.module.css";
import styles2 from "./header.module.css";
import React, {useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    useEffect(() => {
        // Use the styles object within a template literal to get the hashed class name string
        // document.querySelector needs the exact string from the DOM
        const hamburgerButton = document.querySelector(`.${styles2.hamburgerIcon}`) as HTMLButtonElement | null; // Corrected line

        const body = document.body; // Reference to the body element

        // Check if the button was found before proceeding
        if (hamburgerButton) {
            const toggleMobileNav = () => {
                // This string must exactly match the class name used inside :global() in your CSS
                body.classList.toggle('mobile-nav-open');
            };

            // Add the click event listener to the found button
            hamburgerButton.addEventListener('click', toggleMobileNav);

            // Cleanup function: Remove the event listener when the component unmounts
            return () => {
                hamburgerButton.removeEventListener('click', toggleMobileNav);
            };
        }
    }, [styles.hamburgerIcon]);

    return (<>
            <header className={styles2.pageHeader}>
                <div className={styles2.headerLeft}>
                    <a href="#home" className={styles2.homeLink}>
                        <FontAwesomeIcon icon={faHome} className={styles2.homeIcon} />
                    </a>
                </div>
                <div className={styles2.headerMiddle}>
                    <a href="#about">ABOUT</a>
                    <a href="#mrows">MROWS</a>
                    <a href="#mcpdt">MCPDT</a>
                    <a href="#work">HIGHLIGHTS</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#contact">CONTACT</a>
                </div>
                <div className={styles2.headerRight}>
                    <div className={styles2.toggleThemeButton}>
                        {/*<FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />*/}
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                    <button className={styles2.hamburgerIcon} aria-label="Toggle navigation">
                        <span className={styles2.hamburgerLine}></span>
                        <span className={styles2.hamburgerLine}></span>
                        <span className={styles2.hamburgerLine}></span>
                    </button>
                </div>
            </header>
            <nav className={styles2.mobileNavPanel}>
                <a href="#about">ABOUT</a>
                <a href="#mrows">MROWS</a>
                <a href="#mcpdt">MCPDT</a>
                <a href="#work">HIGHLIGHTS</a>
                <a href="#skills">SKILLS</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </>
    )
}