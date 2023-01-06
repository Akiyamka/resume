import { atom } from '@reatom/core';
import { withInit } from '@reatom/hooks';
import { restoreThemeOverride } from '../themeOverrideStorage';
import { ThemeOverride } from '../types';

export const themeAtom = atom<ThemeOverride>('auto', 'theme').pipe(
  withInit(() => restoreThemeOverride())
);
