import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "react-elevated-emotion";

import background from "@src/assets/images/PublicBackground.jpg";
import Navigation from "./Navigation";

export default function RouterOutlet({ children }: PropsWithChildren) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <Navigation />
      <Box sx={{ position: "relative", zIndex: 1, mt: 30, pt: 2 }}>
        <Outlet />
        {children}
      </Box>
    </>
  );
}
