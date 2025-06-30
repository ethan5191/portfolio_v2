'use client';

import React, {useEffect, useRef} from 'react';
import styles from './themePalette.module.css';
import ThemeSelector from "@/app/components/themeButtons/ThemeSelector";

interface ThemePaletteProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThemePalette: React.FC<ThemePaletteProps> = ({isOpen, onClose}) => {
    const paletteRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (paletteRef.current) {
            if (isOpen) {
                paletteRef.current.classList.add(styles.sidePanelOpen);
            } else {
                paletteRef.current.classList.remove(styles.sidePanelOpen);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && paletteRef.current && !paletteRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
        }
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, onClose]);

    const handleThemeChange = () => {

    }

    return (<>
            <div className={styles.paletteContainer} ref={paletteRef}>
                <ThemeSelector initialSelectedThemePalette={'default'} onSelectThemePalette={handleThemeChange} />
            </div>
        </>
    )
}

export default ThemePalette;