import React, {useEffect, useState} from "react";
import styles from './themeSelector.module.css';
import {f1TeamsData} from "@/app/components/themeButtons/types/f1Teams";

interface F1TeamSelectorProps {
    onSelectThemePalette: (themeValue: string) => void;
    initialSelectedThemePalette: string;
}

const F1TeamSelector: React.FC<F1TeamSelectorProps> = ({ onSelectThemePalette, initialSelectedThemePalette }) => {
    const [selectedThemePalette, setSelectedThemePalette] = useState<string>(initialSelectedThemePalette);
    useEffect(() => {
        setSelectedThemePalette(initialSelectedThemePalette);
    }, [initialSelectedThemePalette]);
    const handleThemePaletteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newThemeValue = event.target.value;
        setSelectedThemePalette(newThemeValue);
        onSelectThemePalette(newThemeValue);
    };
    const defaultThemeOption = f1TeamsData.find(option => option.id === 'default');
    const customThemeOptions = f1TeamsData.filter(option => option.id !== 'default');
    const column1Options = customThemeOptions.slice(0, 5);
    const column2Options = customThemeOptions.slice(5, 10);
    return (<>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Choose a Theme:</legend>
                {defaultThemeOption && (
                    <div key={defaultThemeOption.id} className={styles.defaultOption}>
                        <input
                            type="radio"
                            id={defaultThemeOption.id}
                            name="themePalette"
                            value={defaultThemeOption.value}
                            checked={selectedThemePalette === defaultThemeOption.value}
                            onChange={handleThemePaletteChange}
                        />
                        <label htmlFor={defaultThemeOption.id}>{defaultThemeOption.label}</label>
                    </div>
                )}
                <div className={styles.columnsContainer}>
                    <div className={styles.column}>
                        {column1Options.map((themeOption) => (
                            <div key={themeOption.id} className={styles.optionItem}>
                                <input
                                    type="radio"
                                    id={themeOption.id}
                                    name="themePalette"
                                    value={themeOption.value}
                                    checked={selectedThemePalette === themeOption.value}
                                    onChange={handleThemePaletteChange}
                                />
                                <label htmlFor={themeOption.id}>{themeOption.label}</label>
                            </div>
                        ))}
                    </div>
                    <div className={styles.column}>
                        {column2Options.map((themeOption) => (
                            <div key={themeOption.id} className={styles.optionItem}>
                                <input
                                    type="radio"
                                    id={themeOption.id}
                                    name="themePalette"
                                    value={themeOption.value}
                                    checked={selectedThemePalette === themeOption.value}
                                    onChange={handleThemePaletteChange}
                                />
                                <label htmlFor={themeOption.id}>{themeOption.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default F1TeamSelector;