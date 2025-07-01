import styles from "@/app/components/themeButtons/themeSelector.module.css";
import {f1Teams} from "@/app/components/themeButtons/types/f1Teams";
import React from "react";

interface ThemeSelectorInputProps {
    defaultThemeOption: f1Teams | undefined;
    themeOptions: f1Teams[] | null;
    onSelectThemePalette: (themeValue: string) => void;
    initialSelectedThemePalette: string;
    onMouseEnterOption: (id: string) => void;
}

const ThemeSelectorInput: React.FC<ThemeSelectorInputProps> = ({
                                                                   defaultThemeOption,
                                                                   themeOptions,
                                                                   onSelectThemePalette,
                                                                   initialSelectedThemePalette,
                                                                   onMouseEnterOption
                                                               }) => {
    const handleThemePaletteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newThemeValue = event.target.value;
        onSelectThemePalette(newThemeValue);
    };
    const renderThemeOption = (themeOption: f1Teams) => (
        <div
            key={themeOption.id}
            className={themeOption.id === 'default' ? styles.defaultOption : styles.optionItem}
            onMouseEnter={() => onMouseEnterOption(themeOption.id)}
        >
            <input
                type="radio"
                id={themeOption.id}
                name="themePalette"
                value={themeOption.value}
                checked={initialSelectedThemePalette === themeOption.value}
                onChange={handleThemePaletteChange}
                className={styles.radioInput}
            />
            <label htmlFor={themeOption.id} className={styles.radioLabel}>
                {themeOption.label}
            </label>
        </div>
    );

    return (
        <>
            {defaultThemeOption && renderThemeOption(defaultThemeOption)}
            {themeOptions && themeOptions.map(renderThemeOption)}
        </>
    )
}

export default ThemeSelectorInput;