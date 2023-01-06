import { ThemeOverride } from './types';

export function restoreThemeOverride(): ThemeOverride {
  switch (globalThis.localStorage?.getItem('theme')) {
    case 'light':
      return 'light';
    case 'dark':
      return 'dark';
    default:
      return 'auto';
  }
}

export function persistThemeOverride(themeOverride: ThemeOverride) {
  return globalThis.localStorage?.setItem('theme', themeOverride);
}
