import { superThemeApi } from "react-elevated-emotion";

export const primary = "var(--primary)";
export const primaryAlt = "var(--primaryAlt)";
export const primaryHover = "var(--primaryHover)";
export const themeLight = "var(--themeLight)";
export const themeDark = "var(--themeDark)";
export const themeDarkAlt = "var(--themeDarkAlt)";

export const discordBlurple = "var(--discordBlurple)";
export const metamaskOrange = "var(--metamaskOrange)";

superThemeApi.setDefaultPalette({
  primary,
  primaryHover,
  primaryInvert: themeLight,

  // secondary,
  // secondaryHover,
  light: themeLight,
  lightHover: themeLight,
  lightInvert: themeDark,

  dark: themeDark,
  darkAlt: themeDarkAlt,
  darkInvert: themeLight,
});
