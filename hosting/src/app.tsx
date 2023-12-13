import "./theme/stylesheets/index.css";
import "./firebase";

import { Fragment, PropsWithChildren } from "react";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import { SuperThemeProvider } from "react-elevated-emotion";

import Router from "./container/Router";
import { botPing } from "./api/bot";
import { featureFlags } from "./common/utils/featureflag";

botPing().then(console.log);

const Wrapper = (props: PropsWithChildren) =>
  featureFlags.main ? (
    <Fragment {...props} />
  ) : (
    <MetaMaskUIProvider
      {...(props as any)}
      debug
      networks={[80]}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: "GuildBloom",
          url: location.href,
        },
      }}
    />
  );

// App
export const App = () => (
  <Wrapper>
    <SuperThemeProvider>
      <Router />
    </SuperThemeProvider>
  </Wrapper>
);
