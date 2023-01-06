import { action } from '@reatom/core';
import { themes } from '../config';
import { themeAtom } from './atoms';

export const nextTheme = action((ctx) => {
  const i = themes.indexOf(ctx.get(themeAtom));
  themeAtom(ctx, themes[i + 1] ?? themes[0]);
}, 'nextTheme');

export const setTheme = action((ctx) => {
  const i = themes.indexOf(ctx.get(themeAtom));
  themeAtom(ctx, themes[i + 1] ?? themes[0]);
}, 'nextTheme');

