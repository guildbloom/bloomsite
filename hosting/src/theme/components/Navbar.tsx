import tags, { Flex } from "react-elevated-emotion";
import {
  useNavigate,
  NavigateFunction,
  To,
  useLocation,
} from "react-router-dom";

import { mediaQuery } from "../helpers/breakpoints";

import { css } from "@emotion/react";
import { primary } from "../variables";
import { Fragment, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
          active={
            location.pathname === "/"
              ? to === "/"
              : to !== "/" && location.pathname.startsWith(to.toString())
          }
          sx={{ borderColor: "transparent" }}
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
          <Flex align="center" gap={16}>
            {props.logo || props.title ? (
              <Flex align="center" gap={8} onClick={() => navigate("/")}>
                {props.logo ? <img src={props.logo} height={32} /> : null}
                {props.title ? (
                  <h5 style={{ color: primary }}>{props.title}</h5>
                ) : null}
              </Flex>
            ) : null}

            {basicLinks.length ? (
              <Flex className="actions-desktop" align="center" gap={8}>
                {basicLinks.map((el, key) => (
                  <Fragment key={key}>{el}</Fragment>
                ))}
              </Flex>
            ) : null}
          </Flex>

          {props.children}

          <Flex align="center" gap={16}>
            {floatingLinks.length ? (
              <Flex className="actions-desktop" align="center" gap={8}>
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

                <Flex className="actions-mobile" align="center">
                  <Button
                    outline
                    active={open}
                    onClick={() => setOpen((x) => !x)}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </Button>
                </Flex>
              </>
            ) : null}
          </Flex>

          {open ? (
            <Flex column className="mobile-menu" gap={32}>
              <Flex column align="end" className="actions-mobile">
                <Button outline onClick={() => setOpen((x) => !x)}>
                  <FontAwesomeIcon icon={faXmark} size="2x" />
                </Button>
              </Flex>
              {props.logo ? (
                <Flex column align="center">
                  <img src={props.logo} height={100} width={100} />
                </Flex>
              ) : null}
              {props.actions?.length ? (
                <Flex column align="center">
                  {props.actions.map((act, key) => (
                    <Fragment key={key}>{act(onClick)}</Fragment>
                  ))}
                </Flex>
              ) : null}
            </Flex>
          ) : null}
        </>
      ),
    };
  },
})(({ theme }) => {
  return css({
    label: "navbar",
    display: "flex",
    position: "sticky",
    top: 10,
    left: -10,
    right: 10,
    background: theme.light,
    padding: 8,
    margin: "8px 0",
    borderRadius: 8,
    justifyContent: "space-between",
    zIndex: 9999,
    boxShadow: "var(--boxShadow)",

    h5: {
      color: primary,
      margin: 0,
    },

    ".mobile-menu": {
      display: "none",
      overflow: "hidden",
      zIndex: 999,
      width: "100vw",
      height: "100vh",
      background: theme.light,
      padding: "8px 17px",
      position: "fixed",
      top: 0,
      left: 0,
    },

    ".actions-mobile": {
      display: "none",
    },

    [mediaQuery.at(-1)]: {
      top: 0,
      margin: 0,
      borderRadius: 0,
      ".mobile-menu": {
        display: "flex",
      },
      ".actions-desktop": {
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
