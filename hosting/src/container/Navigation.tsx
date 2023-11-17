import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import favicon from "@src/assets/images/favicon.png";
import { loginWithDiscord } from "@src/firebase";
import { Navbar, Button } from "@src/theme";
import { useUserStore } from "@src/store/userStore";
import { featureFlags } from "@src/common/utils/featureflag";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const { isAuthenticated } = useUserStore();

  const navigate = useNavigate();

  const toWaitlist = () => navigate("/waitlist");

  return (
    <Navbar
      logo={favicon}
      title="GuildBloom"
      links={[
        {
          to: "/",
          name: "Home",
          hide: featureFlags.main,
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
          : () =>
              !featureFlags.main ? (
                <Button onClick={loginWithDiscord}>
                  <FontAwesomeIcon icon={faDiscord} />
                  Login with Discord
                </Button>
              ) : (
                <Button onClick={toWaitlist}>
                  <FontAwesomeIcon icon={faDiscord} />
                  Join the waitlist
                </Button>
              ),
      ]}
    />
  );
}
