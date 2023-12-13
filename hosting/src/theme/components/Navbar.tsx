import tags, { Box, Flex } from "react-elevated-emotion";
import {
  useNavigate,
  NavigateFunction,
  To,
  useLocation,
} from "react-router-dom";

import { mediaQuery } from "../helpers/breakpoints";

import { css } from "@emotion/react";
import { themeDarkAlt, themeLight } from "../variables";
import { Fragment, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

type NavbarProps = {
  logo?: any;
  title?: string;
  actions?: Array<(navigate: NavigateFunction) => ReactNode>;
  links?: Array<{
    to: To;
    name: string;
    float?: boolean;
    icon?: ReactNode;
    hide?: boolean;
  }>;
};

export const Navbar = tags.div<NavbarProps>({
  ignore: ["logo", "title", "links", "actions"],
  defaultProps({ links = [], ...props }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const onClick: NavigateFunction = (nav) => {
      setOpen(false);
      navigate(nav);
    };

    const linkElements = links.map(({ to, name, icon, ...other }) => ({
      ...other,
      element: (
        <Button
          outline
          variant="light"
          active={
            location.pathname === "/"
              ? to === "/"
              : to !== "/" && location.pathname.startsWith(to.toString())
          }
          onClick={() => onClick(to)}
        >
          {icon && <span>{icon}</span>}
          {name}
        </Button>
      ),
    }));

    const basicLinks = linkElements
      .filter((el) => !el.float && !el.hide)
      .map((x) => x.element);
    const floatingLinks = linkElements
      .filter((el) => el.float && !el.hide)
      .map((x) => x.element);

    return {
      children: (
        <>
          <Flex align="center" justify="space-between" w="100%">
            <Flex align="center" gap={16}>
              {props.logo || props.title ? (
                <Flex align="center" onClick={() => navigate("/")}>
                  {props.logo ? (
                    <img id="logo" src={props.logo} height={78} />
                  ) : null}
                  {props.title ? <h3>{props.title}</h3> : null}
                </Flex>
              ) : null}

              {/* {basicLinks.length ? (
              <Flex className="links-desktop" align="center" gap={8}>
                {basicLinks.map((el, key) => (
                  <Fragment key={key}>{el}</Fragment>
                ))}
              </Flex>
            ) : null} */}
            </Flex>

            {props.children}

            <Flex align="center" gap={8}>
              {floatingLinks.length ? (
                <Flex className="links-desktop" align="center" gap={8}>
                  {floatingLinks.map((el, key) => (
                    <Fragment key={key}>{el}</Fragment>
                  ))}
                </Flex>
              ) : null}

              {props.actions?.length ? (
                <>
                  <Flex className="actions-desktop" align="center">
                    {props.actions.map((act, key) => (
                      <Fragment key={key}>{act(onClick)}</Fragment>
                    ))}
                  </Flex>
                </>
              ) : null}
            </Flex>

            <Flex className="actions-mobile" align="center">
              {!open ? (
                <Button
                  id="menu"
                  outline
                  variant="light"
                  active={open}
                  onClick={() => setOpen((x) => !x)}
                  sx={{ color: themeLight, background: "transparent" }}
                >
                  <FontAwesomeIcon size="2x" icon={faCaretDown} />
                </Button>
              ) : (
                <Button
                  id="close"
                  outline
                  onClick={() => setOpen((x) => !x)}
                  variant="dark"
                  sx={{
                    color: themeDarkAlt,
                    background: "transparent",
                    zIndex: 9999,
                  }}
                >
                  <FontAwesomeIcon icon={faCaretUp} size="2x" />
                </Button>
              )}
            </Flex>
          </Flex>

          {open ? (
            <Box sx={{ w: "100%", my: 28 }}>
              <Flex column align="center" gap={8}>
                {props.actions.map((act, key) => (
                  <Fragment key={key}>{act(onClick)}</Fragment>
                ))}
              </Flex>
            </Box>
          ) : (
            false
          )}
        </>
      ),
    };
  },
})(({ theme }) => {
  return css({
    label: "navbar",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: "12px 15px",
    borderRadius: 8,
    justifyContent: "space-between",
    zIndex: 9999,
    transition: "height 3s ease",

    h3: {
      margin: 0,
      color: themeLight,
      letterSpacing: 10,
      textTransform: "uppercase",
      marginLeft: 52,
    },

    ".mobile-menu": {
      display: "none",
      overflow: "hidden",
      zIndex: 999,
      width: "100%",
      height: "100%",
      background: theme.light,
      padding: "18px 17px",
      position: "fixed",
      top: 0,
      left: 0,
    },

    ".actions-mobile": {
      display: "none",
    },

    ".links-desktop button, button#menu, button#close": {
      borderColor: "transparent",
      background: "transparent",
      ":hover": {
        borderColor: "transparent",
      },
    },

    [mediaQuery.at(-2)]: {
      borderRadius: 0,
      h3: {
        letterSpacing: 5,
        marginLeft: 15,
        fontSize: 20,
      },
      "img#logo": {
        height: 50,
      },
      ".mobile-menu": {
        display: "flex",
      },
      ".actions-desktop, .links-desktop": {
        display: "none",
      },
      ".actions-mobile": {
        display: "flex",
        "[class$=-button]": {
          width: 32,
          height: 32,
        },
      },
    },
  });
});
