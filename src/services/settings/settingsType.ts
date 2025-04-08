import {ColorSchemeName} from 'react-native';

export type AppColorScheme = 'light' | 'dark';

export type ThemePreference = AppColorScheme | 'system';

export type SettingsStore = {
  showOnboarding: boolean;
  appColor: AppColorScheme;
  themePreference: ThemePreference;
  setThemePreference: (themePreference: ThemePreference) => void;
  onSystemChange: (color: ColorSchemeName) => void;
  finishOnboarding: () => void;
};
