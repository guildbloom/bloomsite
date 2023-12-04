import { Tabs } from "@src/theme/components/Tabs";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserStore } from "@src/store/userStore";

export function TabNavigation() {
  const { isAuthenticated } = useUserStore();
  return (
    <Tabs
      tabs={[
        ...(isAuthenticated
          ? [
              { name: "Discover", to: "/app" },
              { name: "Your Servers", to: "/app/your-servers" },
              { name: "Profile", to: "/app/your-profile" },
            ]
          : [{ name: "Home", to: "/" }]),

        {
          name: "Help",
          icon: <FontAwesomeIcon icon={faCircleQuestion} />,
          to: "/help",
        },
      ]}
    />
  );
}
