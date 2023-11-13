import tags from "react-elevated-emotion";
import { css } from "@emotion/react";
import { CSSProperties } from "react";
import { mediaQuery } from "../helpers/breakpoints";

type MobileWrapperProps = {
  mobile: CSSProperties;
  standard?: CSSProperties;
};

export const MobileWrapper = tags.div<MobileWrapperProps>({
  ignore: ["standard", "mobile"],
})(({ standard, mobile }) =>
  css({
    ...standard,
    [mediaQuery.at(-1)]: {
      ...mobile,
    },
  })
);
