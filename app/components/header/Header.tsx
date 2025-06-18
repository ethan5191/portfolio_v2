'use client';

import styles from "./header.module.css";
import React, {useEffect, useState} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

let currentTheme: Theme = 'light';
const mockToggleTheme = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    console.log("Theme toggled to:", currentTheme);
};

export default function Header() {

    useEffect(() => {
        // Use the styles object within a template literal to get the hashed class name string
        // document.querySelector needs the exact string from the DOM
        const hamburgerButton = document.querySelector(`.${styles.hamburgerIcon}`) as HTMLButtonElement | null; // Corrected line

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

    const [theme, setTheme] = useState<Theme>('dark');
    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        } else {
            document.body.classList.add('dark-mode');
        }
    }, []);
    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            document.body.classList.toggle('dark-mode', newTheme === 'dark');
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (<>
            <header className={styles.pageHeader}>
                <div className={styles.headerLeft}>
                    <a href="#home" className={styles.homeLink}>
                        <FontAwesomeIcon icon={faHome} className={styles.homeIcon}/>
                    </a>
                </div>
                <div className={styles.headerMiddle}>
                    <a href="#about">ABOUT</a>
                    <a href="#mrows">MROWS</a>
                    <a href="#mcpdt">MCPDT</a>
                    <a href="#work">HIGHLIGHTS</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#contact">CONTACT</a>
                </div>
                <div className={styles.headerRight}>
                    <button
                        className={styles.toggleThemeButton}
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun}/>
                    </button>
                    <button className={styles.hamburgerIcon} aria-label="Toggle navigation">
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>
                </div>
            </header>
            <nav className={styles.mobileNavPanel}>
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