import { PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { useWindowSize } from "@src/common/hooks/useWindowSize";
import { Navbar, Button, primary } from "@src/theme";
import { loginWithDiscord } from "@src/firebase";

import background from "@src/assets/images/PublicBackground.jpg";
import favicon from "@src/assets/images/favicon.png";
import { Box, Flex } from "react-elevated-emotion";
import { useUserStore } from "@src/store/userStore";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function RouterOutlet({ children }: PropsWithChildren) {
  const { isAuthenticated } = useUserStore();
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

      <Navbar
        logo={favicon}
        title="GuildBloom"
        links={[
          {
            to: "/",
            name: "Home",
          },
          {
            to: "/help",
            name: "Help",
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            float: true,
          },
        ]}
        actions={[
          isAuthenticated
            ? (navigate) => (
                <Button onClick={() => navigate("/app")}>Profile</Button>
              )
            : () => (
                <Button onClick={loginWithDiscord}>
                  <FontAwesomeIcon icon={faDiscord} />
                  Login with Discord
                </Button>
              ),
        ]}
      />
      <Box sx={{ position: "relative", zIndex: 1, mt: 30 }}>
        <Outlet />
        {children}
      </Box>
    </>
  );
}
