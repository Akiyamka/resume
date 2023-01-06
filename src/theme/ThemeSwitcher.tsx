import { useAtom } from 'reatom-preact';
import { ctx } from 'store';
import { actions } from './reatom';
import { themeAtom } from './reatom/atoms';

export function ThemeSwitcher() {
  const theme = useAtom(themeAtom);
  return <span onClick={() => actions.nextTheme(ctx)}> theme {theme.value}</span>;
}
