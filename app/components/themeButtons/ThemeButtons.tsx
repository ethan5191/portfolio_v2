'use client';

import React from 'react';
import styles from "../header/header.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faPalette, faSun} from '@fortawesome/free-solid-svg-icons';

import {AllThemes} from '../types/Theme';

interface ThemeToggleButtonsProps {
    currentMode: AllThemes;
    onToggleMode: () => void;
    onPaletteClick: () => void;
}

const ThemeToggleButtons: React.FC<ThemeToggleButtonsProps> = ({
                                                                   currentMode,
                                                                   onToggleMode,
                                                                   onPaletteClick,
                                                               }) => {
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
                onClick={onPaletteClick}
                aria-label={'Select a different theme'}
            >
                <FontAwesomeIcon icon={faPalette} className="fa-fw"/>
            </button>
        </>
    );
};

export default ThemeToggleButtons;