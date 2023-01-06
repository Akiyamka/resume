import { onUpdate, onConnect } from '@reatom/hooks';
import { ThemeOverride } from 'theme/types';
import { persistThemeOverride } from '../themeOverrideStorage';
import { themeAtom } from './atoms';

const updateDataset = (theme: ThemeOverride) => {
  if (globalThis.document) {
    globalThis.document.documentElement.dataset.theme = theme;
  }
}
onConnect(themeAtom, (ctx) => {
  updateDataset(ctx.get(themeAtom));
});

onUpdate(themeAtom, (ctx, theme) => {
  persistThemeOverride(theme);
  ctx.schedule(() => {
    updateDataset(ctx.get(themeAtom));
  });
});

