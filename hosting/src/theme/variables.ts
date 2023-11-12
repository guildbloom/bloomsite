import { superThemeApi } from "react-elevated-emotion";

export const primary = "var(--primary)";
export const primaryAlt = "var(--primaryAlt)";
export const primaryHover = "var(--primaryHover)";
export const themeLight = "var(--themeLight)";

superThemeApi.setDefaultPalette({
  primary,
  primaryAlt,
  primaryHover,
  light: themeLight,
});
