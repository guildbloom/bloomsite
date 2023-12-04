import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  MetaMaskButton,
  useSDK,
  useAccount,
  useBalance,
  useConnect,
} from "@metamask/sdk-react-ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import favicon from "@src/assets/images/avatar.svg";
import metamaskIcon from "@src/assets/images/metamask.svg";
import { loginWithDiscord } from "@src/firebase";
import {
  Navbar,
  Button,
  ButtonProps,
  discordBlurple,
  themeLight,
  metamaskOrange,
} from "@src/theme";
import { useUserStore } from "@src/store/userStore";
import { featureFlags } from "@src/common/utils/featureflag";
import { useNavigate } from "react-router-dom";
import tags, { SuperComponent } from "react-elevated-emotion";

const MetaMaskIcon = tags.div({
  defaultProps(props) {
    return {
      children: (
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.9863 4.07327C24.0072 3.96817 24.0072 3.86307 23.9653 3.75797L23.0449 0.920238C22.9403 0.583915 22.5638 0.415753 22.2291 0.541874L15.2842 3.14838C15.2214 3.1694 15.1378 3.19042 15.075 3.19042H8.92499C8.84132 3.19042 8.77856 3.1694 8.71581 3.14838L1.77089 0.541874C1.43619 0.415753 1.05966 0.583915 0.95507 0.920238L0.0346588 3.73695C-0.00717807 3.84205 -0.00717807 3.96817 0.0137404 4.07327L1.14334 9.22322L1.24793 9.68567L1.35252 10.1271L1.43619 10.5055L1.60354 11.2412C1.74997 11.4093 1.79181 11.6405 1.72905 11.8297L0.243843 16.4542C0.202006 16.5803 0.202006 16.7064 0.243843 16.8115L1.54079 21.2888C1.64538 21.6251 1.98007 21.8143 2.29385 21.7092L6.74947 20.469C6.93774 20.406 7.14692 20.469 7.31427 20.5952L8.08825 21.2258C8.10917 21.2468 8.10917 21.2468 8.13009 21.2468L10.0546 22.5921C10.1592 22.6551 10.2847 22.6972 10.4102 22.6972H13.6316C13.7571 22.6972 13.8827 22.6551 13.9873 22.5921L15.9117 21.2468C15.9327 21.2468 15.9327 21.2258 15.9536 21.2258L16.7276 20.5952C16.874 20.469 17.0832 20.427 17.2924 20.469L21.748 21.7092C22.0827 21.7933 22.4174 21.6041 22.5011 21.2888L23.798 16.8115C23.8398 16.6854 23.8398 16.5593 23.798 16.4542L22.3128 11.8297C22.25 11.6195 22.2919 11.3883 22.4383 11.2412L23.9863 4.07327ZM9.65714 15.256L7.89999 14.7305C7.64897 14.6675 7.62805 14.3311 7.85815 14.205L9.11326 13.6375C9.25969 13.5744 9.40612 13.6375 9.46887 13.7636L9.99183 14.8566C10.0964 15.0879 9.88724 15.3191 9.65714 15.256ZM7.14692 9.58056C7.12601 9.60159 7.08417 9.62261 7.06325 9.62261L2.71222 10.7997C2.58671 10.8418 2.4612 10.7787 2.41936 10.6526L0.808641 4.38857C0.808641 4.34653 0.808641 4.28347 0.808641 4.24143L1.79181 1.55084C1.85456 1.4037 2.04283 1.34064 2.16834 1.42472L10.0755 6.86896C10.2219 6.97406 10.2219 7.16324 10.0964 7.26834L7.14692 9.58056ZM13.6735 20.448H10.3265C10.1801 20.448 10.0755 20.3219 10.0964 20.1747L10.2219 18.9556C10.2219 18.8925 10.2638 18.8295 10.3265 18.7874L10.6194 18.5772C10.6612 18.5562 10.7031 18.5352 10.7449 18.5352H13.2133C13.2551 18.5352 13.3179 18.5562 13.3388 18.5772L13.6316 18.7874C13.6944 18.8295 13.7153 18.8925 13.7362 18.9556L13.8827 20.1747C13.9245 20.3219 13.8199 20.448 13.6735 20.448ZM16.1 14.7305L14.3219 15.256C14.0918 15.3191 13.9036 15.0879 13.9873 14.8777L14.5102 13.7846C14.573 13.6585 14.7403 13.5954 14.8658 13.6585L16.1209 14.226C16.372 14.3101 16.351 14.6464 16.1 14.7305ZM21.5806 10.6526C21.5388 10.7787 21.4133 10.8418 21.2878 10.7997L16.9367 9.62261C16.8949 9.62261 16.874 9.60159 16.8531 9.58056L13.9036 7.26834C13.7781 7.16324 13.7781 6.95304 13.9245 6.86896L21.8317 1.42472C21.9572 1.34064 22.1454 1.38268 22.2082 1.55084L23.1914 4.26245C23.2123 4.30449 23.2123 4.34653 23.1914 4.40959L21.5806 10.6526Z"
            fill={metamaskOrange}
          />
        </svg>
      ),
    };
  },
})({});

export const ActionBaseButton: SuperComponent<"button", ButtonProps> = (
  props
) => (
  <Button
    {...props}
    outline
    sx={{ p: "12px 18px", fontSize: 19, gap: 14, ...props?.sx }}
  />
);

export const DiscordThemedButton: SuperComponent<"button", ButtonProps> = (
  props
) => (
  <ActionBaseButton
    {...props}
    outline
    sx={
      {
        color: discordBlurple,
        borderColor: discordBlurple,
        ":hover": {
          color: themeLight,
          background: discordBlurple,
        },
        ...props?.sx,
      } as any
    }
  />
);

export const MetaMaskThemedButton: SuperComponent<"button", ButtonProps> = (
  props
) => {
  const { connect } = useConnect();
  const { connected } = useSDK();

  if (!connected) {
    return (
      <ActionBaseButton
        {...props}
        outline
        sx={
          {
            color: metamaskOrange,
            borderColor: metamaskOrange,
            ":hover": {
              color: themeLight,
              background: metamaskOrange,
              path: { fill: themeLight },
            },
            ...props?.sx,
          } as any
        }
      >
        <MetaMaskIcon />
        Connect a wallet
      </ActionBaseButton>
    );
  }

  return (
    <MetaMaskButton
      theme="dark"
      color="white"
      // iconStyle={{
      //   fill: metamaskOrange,
      // }}
      // textStyle={{
      //   display: "flex",
      //   alignItems: "center",
      //   lineHeight: "10px",
      //   fontWeight: 700,
      // }}
      // buttonStyle={{
      //   display: "flex",
      //   border: "none",
      //   alignItems: "center",
      //   lineHeight: "10px",
      //   cursor: "pointer",
      //   padding: "12px 18px",
      //   background: "transparent",
      // }}
    />
  );
};

export default function BrandBar({ sx = {} }) {
  const { isAuthenticated } = useUserStore();

  const navigate = useNavigate();

  const toWaitlist = () => navigate("/waitlist");

  return (
    <Navbar
      id="navigation"
      logo={favicon}
      title="GuildBloom"
      actions={[
        isAuthenticated
          ? (navigate) => <MetaMaskThemedButton />
          : () =>
              !featureFlags.main ? (
                <DiscordThemedButton onClick={loginWithDiscord} sx={{}}>
                  <FontAwesomeIcon icon={faDiscord} size="lg" />
                  Login with Discord
                </DiscordThemedButton>
              ) : (
                <DiscordThemedButton onClick={toWaitlist}>
                  <FontAwesomeIcon icon={faDiscord} size="lg" />
                  Join the waitlist
                </DiscordThemedButton>
              ),
      ]}
      sx={{ mx: 28 }}
    />
  );
}
