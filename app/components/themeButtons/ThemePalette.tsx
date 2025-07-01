'use client';

import React, {useEffect, useRef, useState} from 'react';
import styles from './themePalette.module.css';
import ThemeSelector from "@/app/components/themeButtons/ThemeSelector";
import {ColorPaletteName} from "@/app/components/types/Theme";
import {f1TeamsData} from "@/app/components/themeButtons/types/f1Teams";

interface ThemePaletteProps {
    isOpen: boolean;
    onClose: () => void;
    activeColorPalette: ColorPaletteName;
    onUpdateColorPalette: (newPalette: ColorPaletteName) => void;
}

const ThemePalette: React.FC<ThemePaletteProps> = ({isOpen, onClose, activeColorPalette, onUpdateColorPalette}) => {
    const paletteRef = useRef<HTMLDivElement>(null);
    const [hoveredThemeId, setHoveredThemeId] = useState<string | null>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnterOption = (id: string) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setHoveredThemeId(id);
    };

    const handleMouseLeaveOption = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredThemeId(null);
            hoverTimeoutRef.current = null;
        }, 200);
    };

    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);

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

    const hoveredDescription = hoveredThemeId
        ? f1TeamsData.find(option => option.id === hoveredThemeId)?.description
        : null;

    return (<>
            <div className={styles.paletteContainer} ref={paletteRef}>
                <ThemeSelector initialSelectedThemePalette={activeColorPalette}
                               onSelectThemePalette={onUpdateColorPalette} onMouseEnterOption={handleMouseEnterOption}
                               onMouseLeaveOption={handleMouseLeaveOption}/>
                <div className={`${styles.floatingDescriptionPanel} ${hoveredThemeId ? styles.floatingPanelVisible : ''}`}>
                    {hoveredDescription}
                </div>
            </div>
        </>
    )
}

export default ThemePalette;