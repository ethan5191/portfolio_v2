import styles from "@/app/components/themeButtons/themeSelector.module.css";
import {f1Teams} from "@/app/components/themeButtons/types/f1Teams";

interface ThemeSelectorInputProps {
    defaultThemeOption: f1Teams | undefined;
    themeOptions: f1Teams[] | null;
    onSelectThemePalette: (themeValue: string) => void;
    initialSelectedThemePalette: string;
}

const ThemeSelectorInput: React.FC<ThemeSelectorInputProps> = ({
                                                                   defaultThemeOption,
                                                                   themeOptions,
                                                                   onSelectThemePalette,
                                                                   initialSelectedThemePalette
                                                               }) => {
    const handleThemePaletteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newThemeValue = event.target.value;
        onSelectThemePalette(newThemeValue);
    };
    return (<>
            {defaultThemeOption && (
                <div key={defaultThemeOption.id} className={styles.defaultOption}>
                    <input
                        type="radio"
                        id={defaultThemeOption.id}
                        name="themePalette"
                        value={defaultThemeOption.value}
                        checked={initialSelectedThemePalette  === defaultThemeOption.value}
                        onChange={handleThemePaletteChange}
                    />
                    <label htmlFor={defaultThemeOption.id}>{defaultThemeOption.label}</label>
                </div>
            )}
            {themeOptions && (
                themeOptions.map((themeOption) => (
                    <div key={themeOption.id} className={styles.optionItem}>
                        <input
                            type="radio"
                            id={themeOption.id}
                            name="themePalette"
                            value={themeOption.value}
                            checked={initialSelectedThemePalette  === themeOption.value}
                            onChange={handleThemePaletteChange}
                        />
                        <label htmlFor={themeOption.id}>{themeOption.label}</label>
                    </div>
                ))
            )}
        </>
    )
}

export default ThemeSelectorInput;