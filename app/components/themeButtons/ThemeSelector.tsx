import React from "react";
import styles from './themeSelector.module.css';
import {f1TeamsData} from "@/app/components/themeButtons/types/f1Teams";
import ThemeSelectorInput from "@/app/components/themeButtons/ThemeSelectorInput";

interface F1TeamSelectorProps {
    onSelectThemePalette: (themeValue: string) => void;
    initialSelectedThemePalette: string;
    onMouseEnterOption: (id: string) => void;
    onMouseLeaveOption: () => void;
}

const F1TeamSelector: React.FC<F1TeamSelectorProps> = ({
                                                           onSelectThemePalette,
                                                           initialSelectedThemePalette,
                                                           onMouseEnterOption,
                                                           onMouseLeaveOption
                                                       }) => {
    const defaultThemeOption = f1TeamsData.find(option => option.id === 'default');
    const customThemeOptions = f1TeamsData.filter(option => option.id !== 'default');
    const column1Options = customThemeOptions.slice(0, 5);
    const column2Options = customThemeOptions.slice(5, 10);
    return (<>
            <fieldset className={styles.fieldset} onMouseLeave={onMouseLeaveOption}>
                <legend className={styles.legend}>Choose a Theme:</legend>
                <ThemeSelectorInput defaultThemeOption={defaultThemeOption} onSelectThemePalette={onSelectThemePalette}
                                    initialSelectedThemePalette={initialSelectedThemePalette} themeOptions={null}
                                    onMouseEnterOption={onMouseEnterOption}/>
                <div className={styles.columnsContainer}>
                    <div className={styles.column}>
                        <ThemeSelectorInput defaultThemeOption={undefined} onSelectThemePalette={onSelectThemePalette}
                                            initialSelectedThemePalette={initialSelectedThemePalette}
                                            themeOptions={column1Options} onMouseEnterOption={onMouseEnterOption}/>
                    </div>
                    <div className={styles.column}>
                        <ThemeSelectorInput defaultThemeOption={undefined} onSelectThemePalette={onSelectThemePalette}
                                            initialSelectedThemePalette={initialSelectedThemePalette}
                                            themeOptions={column2Options} onMouseEnterOption={onMouseEnterOption}/>
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default F1TeamSelector;