import tags, { Flex, FlexProps } from "react-elevated-emotion";
import { keyframes } from "@emotion/react";

import right from "@src/assets/images/gb_mask_right.svg";
import left from "@src/assets/images/gb_mask_left.svg";

const splitRight = keyframes`
  0%, 100% {
    transform: translateX(0%, 0%);
  }
  50% {
    transform: translate(30%, -30%);
  }
`;
const splitLeft = keyframes`
  0%, 100% {
    transform: translateX(0%);
  }
  50% {
    transform: translate(-30%, 30%);
  }
`;
const opacity = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.1;
  }
`;

export const Loader = tags.div({
  defaultProps(props) {
    return {
      children: (
        <>
          <div className="mask-left"></div>
          <div className="mask-right"></div>
        </>
      ),
    };
  },
})(() => ({
  width: 102,
  height: 100,
  display: "inline-flex",
  alignItems: "center",
  transition: "all 2.1s",
  animation: `${opacity} 2.1s infinite`,

  ".mask-left, .mask-right": {
    position: "relative",
    transition: "all 2.1s",
    ":before": {
      content: "''",
      position: "absolute",
      maskSize: "contain",
      maskRepeat: "no-repeat",
      width: "100%",
      height: "100%",

      animationDuration: "2.1s",
      animationIterationCount: "infinite",

      imageRendering: "crisp-edges",
      transition: "all 2.1s",
    },
  },

  ".mask-left": {
    width: 50,
    height: 100,

    ":before": {
      background: "linear-gradient(112deg, #4872B0 7.88%, #001F4E 115.22%)",
      maskImage: `url(${left})`,
      animationName: `${splitLeft}`,
    },
  },
  ".mask-right": {
    width: 53,
    height: 92,
    ":before": {
      background: "linear-gradient(85deg, #4872B0 -47.57%, #001F4E 111.87%)",
      maskImage: `url(${right})`,
      animationName: `${splitRight}`,
    },
  },
}));

export const LoaderSplashContainer = tags.fragment<FlexProps>({
  defaultProps(props) {
    return {
      children: (
        <Flex
          fill
          minH={300}
          align="center"
          justify="center"
          {...(props as any)}
        />
      ),
    };
  },
})({});
