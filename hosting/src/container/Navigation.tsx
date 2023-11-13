import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import favicon from "@src/assets/images/favicon.png";
import { loginWithDiscord } from "@src/firebase";
import { Navbar, Button } from "@src/theme";
import { useEffect } from "react";
import { checkAuthStatus, useUserStore } from "@src/store/userStore";

export default function Navigation() {
  const { isAuthenticated } = useUserStore();
  // useEffect(() => {
  //   checkAuthStatus(false);
  // }, []);
  return (
    <Navbar
      logo={favicon}
      title="GuildBloom"
      links={[
        {
          to: "/",
          name: "Home",
        },
        {
          to: "/app",
          name: "Discover",
          hide: !isAuthenticated,
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
              <Button onClick={() => navigate("/app/profile")}>Profile</Button>
            )
          : () => (
              <Button onClick={loginWithDiscord}>
                <FontAwesomeIcon icon={faDiscord} />
                Login with Discord
              </Button>
            ),
      ]}
    />
  );
}
