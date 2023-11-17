import { CSSProperties } from "react";
import styled, {
  SuperThemeDefinition,
  SuperThemePalette,
  Variant,
} from "react-elevated-emotion";
import { Loader } from "./Loader";

export type ButtonProps = {
  outline?: boolean;
  active?: boolean;
  loading?: boolean;
};

type ConfigColor = {
  theme: SuperThemeDefinition;
  applyTo: (keyof CSSProperties)[];
  defaultColor: keyof SuperThemePalette;
  variant?: Variant;
};

export function configureColor({
  theme,
  variant,
  defaultColor,
  applyTo = [],
}: ConfigColor) {
  let color = variant ? theme[variant] : defaultColor;
  return applyTo.reduce(
    (acc, key) => ({
      ...acc,
      [key]: color,
    }),
    {}
  );
}

export const Button = styled.button<ButtonProps>({
  testid: "button",
  ignore: ["outline", "active"],
  defaultProps({ disabled, loading, children }) {
    return {
      disabled: loading ?? disabled,
      children: loading ? (
        <Loader
          size="sm"
          variant="light"
          sx={{ scale: "20%", ml: -40, mr: -30 }}
        />
      ) : (
        children
      ),
    };
  },
})(({ theme, disabled, loading, active = false, outline = false }) => ({
  label: "button",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  border: `2px solid transparent`,
  borderRadius: 8,
  fontWeight: 700,
  padding: "5px 7px",
  cursor: "pointer",

  transition: "all 0.4s",

  ...(active
    ? {
        borderColor: outline ? theme.primary : "transparent",
        color: !outline ? theme.primary : theme.primaryAlt,
        background: outline ? theme.primary : "transparent",

        ":hover": {
          borderColor: outline ? theme.primaryHover : "transparent",
          color: outline ? theme.primaryAlt : theme.primary,
          background: !outline ? theme.primaryHover : theme.primaryHover,
        },
      }
    : {
        borderColor: outline ? theme.primary : "transparent",
        color: outline ? theme.primary : theme.primaryAlt,
        background: !outline ? theme.primary : "transparent",

        ":hover": {
          borderColor: outline ? theme.primaryHover : "transparent",
          color: theme.primaryAlt,
          background: !outline ? theme.primaryHover : theme.primaryHover,
        },
      }),

  ...(loading || disabled
    ? {
        opacity: 0.7,
        ":hover": {
          borderColor: outline ? theme.primary : "transparent",
          color: outline ? theme.primary : theme.primaryAlt,
          background: !outline ? theme.primary : "transparent",
        },
      }
    : {}),
}));
