import { ReactNode } from "react";
import tags from "react-elevated-emotion";
import {
  NavigateFunction,
  To,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button } from "./Button";
import { keyframes } from "@emotion/react";

export type TabProps = {
  to: To;
  name: ReactNode;
  icon?: ReactNode;
  hide?: boolean;
};

export type TabsProps = {
  tabs?: Array<TabProps>;
};

export const Tabs = tags.div<TabsProps>({
  ignore: ["tabs"],
  defaultProps({ tabs }) {
    const navigate = useNavigate();
    const location = useLocation();

    const onClick: NavigateFunction = (nav) => {
      navigate(nav);
    };

    return {
      children: (
        <>
          {tabs
            .filter((x) => !x.hide)
            .map(({ to, icon, name }, key) => (
              <Button
                key={key}
                outline
                variant={null}
                active={
                  location.pathname === "/"
                    ? to === "/"
                    : to.toString().split("/").length > 1
                    ? to.toString() === location.pathname
                    : location.pathname.startsWith(to.toString())
                }
                onClick={() => onClick(to)}
              >
                {icon && <span>{icon}</span>}
                {name}
              </Button>
            ))}
        </>
      ),
    };
  },
})(({ theme, variant = "dark" }) => ({
  display: "flex",
  gap: 20,

  color: theme[`${variant}`],
  paddingBottom: 3,

  marginLeft: 8,
  marginBottom: 28,

  button: {
    padding: "unset",
    margin: "unset",
    position: "relative",
    background: "unset",
    ":hover": {
      ":before": {
        content: "''",
        position: "absolute",
        right: "13%",
        bottom: -6,
        height: 2,
        width: "65%",
        background: theme[`${variant}`],
        zIndex: 10,
        animation: `${underlineMotion} 0.35s ease-in`,
      },
    },
  },
  ["[class$=-button-active]"]: {
    ":before": {
      content: "''",
      position: "absolute",
      right: "13%",
      bottom: -6,
      height: 2,
      width: "65%",
      background: theme[`${variant}`],
      zIndex: 10,
      animation: `${underlineMotion} 0.35s ease-in`,
    },
  },
}));

const underlineMotion = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 70%;
  }
`;
