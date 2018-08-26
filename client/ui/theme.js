import color from "tinycolor2";

let theme = {
  dark: "#333",
  accent: "#fc0",
  text: "#eee"
};

theme = Object.assign(theme, {
  darkLighten: String(color(theme.dark).lighten(4)),
  darkDarken: String(color(theme.dark).darken(1))
});

export { theme };
