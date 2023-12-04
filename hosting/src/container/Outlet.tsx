import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "react-elevated-emotion";
import { css } from "@emotion/react";

import background from "@src/assets/images/background_accent.png";
import BrandBar from "./BrandBar";
import { themeLight } from "@src/theme";
import { TabNavigation } from "./TabNavigation";

export default function RouterOutlet({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        sx={{ display: "grid", gridTemplateRows: "auto 1fr", width: "100%" }}
      >
        <BrandBar
          sx={{
            mx: 28 + 15,
          }}
        />
        <Box
          id="content"
          sx={{
            position: "relative",
            zIndex: 1,
            p: "21px 24px",
            background: themeLight,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            // mx: 28,
            ...{
              ":before": {
                content: "''",
                background: `url(${background})`,
                backgroundSize: "85% 65%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                opacity: 0.9,
                width: "100%",
                height: "100%",

                position: "absolute",
                zIndex: -1,
                bottom: 0,
                right: 0,
              },
            },
          }}
        >
          <TabNavigation />
          <Outlet />
          {children}
        </Box>
      </Box>
    </>
  );
}
