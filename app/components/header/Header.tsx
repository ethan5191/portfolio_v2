'use client';

import styles from "./header.module.css";
import React, {useEffect, useState} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import ThemeButtons from "@/app/components/themeButtons/ThemeButtons";
import ThemePalette from '../themeButtons/ThemePalette';
import {f1Teams} from '../themeButtons/types/f1Teams';
import {AllThemes, ColorPaletteName} from "@/app/components/types/Theme";

export default function Header() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

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

    const [theme, setTheme] = useState<AllThemes>('dark');
    const [activeColorPalette, setActiveColorPalette] = useState<ColorPaletteName>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('activeColorPalette') as ColorPaletteName) || 'default';
        }
        return 'default';
    });

    useEffect(() => {
        const bodyClassList = document.body.classList;
        // 1. Clean up ALL potential custom theme classes from the body
        f1Teams.forEach(className => {
            bodyClassList.remove(className);
        });
        // 2. Apply the current custom theme class, if one is selected (i.e., not 'default')
        if (activeColorPalette !== 'default') {
            bodyClassList.add(activeColorPalette);
        }
        // 3. Apply/remove the 'dark-mode' class based on the 'theme' state
        bodyClassList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
        localStorage.setItem('activeColorPalette', activeColorPalette);
    }, [theme, activeColorPalette]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            console.log('Header: toggleTheme called. Current activeColorPalette before reset:', activeColorPalette);
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            setActiveColorPalette('default');
            console.log(activeColorPalette);
            return newTheme;
        });
    };

    const handleUpdateColorPalette = (newPalette: ColorPaletteName) => {
        setActiveColorPalette(newPalette);
    };

    const handlePaletteButtonClick = () => {
        setIsPanelOpen(prev => !prev);
        document.body.classList.remove('mobile-nav-open');
    }

    const handleClosePanel = () => {
        setIsPanelOpen(false);
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
                    <ThemeButtons currentMode={theme} onToggleMode={toggleTheme}
                                  onPaletteClick={handlePaletteButtonClick} isPaletteOpen={isPanelOpen}/>
                    <button className={styles.hamburgerIcon} aria-label="Toggle navigation">
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>
                </div>
                <ThemePalette isOpen={isPanelOpen} onClose={handleClosePanel}
                              activeColorPalette={activeColorPalette}
                              onUpdateColorPalette={handleUpdateColorPalette}/>
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