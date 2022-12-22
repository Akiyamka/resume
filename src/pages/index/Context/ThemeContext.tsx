import {
  createContext,
  createEffect,
  createSignal,
  ParentProps,
} from "solid-js";

export const themes = {
  dark: "dark",
  light: "light",
};

const getTheme = () => {
  if (globalThis.localStorage) {
    const theme = globalThis.localStorage.getItem("theme");
    if (theme === null) {
      return themes.light;
    }
    if (Object.values(themes).includes(theme)) return theme;
  }
  if (globalThis.matchMedia) {
    const userMedia = globalThis.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) return themes.light;
  }
  return themes.dark;
};

export const [theme, setTheme] = createSignal(getTheme());

export const ThemeContext = createContext(themes.light);

export function ThemeProvider(props: ParentProps) {
  createEffect(() => {
    document.documentElement.dataset.theme = theme();
    localStorage.setItem("theme", theme());
  });

  return (
    <ThemeContext.Provider value={theme()}>
      {props.children}
    </ThemeContext.Provider>
  );
}
