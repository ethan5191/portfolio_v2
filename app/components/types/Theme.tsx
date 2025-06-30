import {f1Teams} from "@/app/components/themeButtons/types/f1Teams";

export type ThemeToggle = 'light' | 'dark';

export type F1Themes = 'ferrari' | 'sauber' | 'haas' | 'mercedes' | 'mclaren' | 'williams' | 'redBull' | 'rb' | 'alpine' | 'aston';

export type AllThemes = ThemeToggle | F1Themes;

type F1TeamNames = typeof f1Teams[number];

export type ColorPaletteName = 'default' | F1TeamNames;
