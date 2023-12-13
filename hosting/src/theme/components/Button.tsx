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
  ignore: ["outline", "active", "loading"],
  defaultProps({ disabled, loading, variant, children }: any) {
    return {
      disabled: loading ?? disabled,
      children: loading ? (
        <Loader
          size="sm"
          variant={variant !== "dark" ? "dark" : "light"}
          sx={{ scale: "20%" }}
        />
      ) : (
        children
      ),
    };
  },
})(
  ({
    theme,
    variant = "primary",
    disabled,
    loading,
    active = false,
    outline = false,
  }) => ({
    label: active ? "button-active" : "button",
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
          borderColor: outline ? theme[`${variant}`] : "transparent",
          color: !outline ? theme[`${variant}`] : theme[`${variant}Invert`],
          background: outline ? theme[`${variant}`] : "transparent",

          ":hover": {
            borderColor: outline ? theme[`${variant}Hover`] : "transparent",
            color: outline ? theme[`${variant}Invert`] : theme[`${variant}`],
            background: !outline
              ? theme[`${variant}Hover`]
              : theme[`${variant}Hover`],
          },
        }
      : {
          borderColor: outline ? theme[`${variant}`] : "transparent",
          color: outline ? theme[`${variant}`] : theme[`${variant}Invert`],
          background: !outline ? theme[`${variant}`] : "transparent",

          ":hover": {
            borderColor: outline ? theme[`${variant}Hover`] : "transparent",
            color: theme[`${variant}Invert`],
            background: !outline
              ? theme[`${variant}Hover`]
              : theme[`${variant}Hover`],
          },
        }),

    ...(loading || disabled
      ? {
          opacity: 0.7,
          ":hover": {
            borderColor: outline ? theme[`${variant}`] : "transparent",
            color: outline ? theme[`${variant}`] : theme[`${variant}Invert`],
            background: !outline ? theme[`${variant}`] : "transparent",
          },
        }
      : {}),
  })
);
