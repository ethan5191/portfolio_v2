'use client';

import React from 'react';
import styles from "../header/header.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faPalette, faSun, faXmark} from '@fortawesome/free-solid-svg-icons';

import {AllThemes} from '../types/Theme';

interface ThemeToggleButtonsProps {
    currentMode: AllThemes;
    onToggleMode: () => void;
    onPaletteClick: () => void;
    isPaletteOpen: boolean;
}

const ThemeToggleButtons: React.FC<ThemeToggleButtonsProps> = ({
                                                                   currentMode,
                                                                   onToggleMode,
                                                                   onPaletteClick,
                                                                   isPaletteOpen
                                                               }) => {

    const handlePaletteButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onPaletteClick();
    };

    return (
        <>
            <button
                className={styles.toggleThemeButton}
                onClick={onToggleMode}
                aria-label={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`}
            >
                <FontAwesomeIcon icon={currentMode === 'dark' ? faSun : faMoon} className="fa-fw"/>
            </button>
            <button
                className={styles.toggleThemeButton}
                onMouseDown={handlePaletteButtonClick}
                aria-label={isPaletteOpen ? 'Close theme selection panel' : 'Select a different theme'}
            >
                <FontAwesomeIcon icon={isPaletteOpen ? faXmark : faPalette} className="fa-fw"/>
            </button>
        </>
    );
};

export default ThemeToggleButtons;