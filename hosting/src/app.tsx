import { createRoot } from "react-dom/client";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import "./firebase";

import "./theme/stylesheets/index.css";

import Router from "./container/Router";
import { SuperThemeProvider } from "react-elevated-emotion";
import { botPing } from "./api/bot";
import { featureFlags } from "./common/utils/featureflag";
import { Fragment, PropsWithChildren } from "react";

const root = createRoot(document.getElementById("root"));

botPing().then(console.log);

const Wrapper = (props: PropsWithChildren) =>
  featureFlags.main ? (
    <Fragment {...props} />
  ) : (
    <MetaMaskUIProvider
      {...(props as any)}
      debug
      sdkOptions={{
        dappMetadata: {
          name: "GuildBloom",
          url: location.href,
        },
      }}
    />
  );

root.render(
  <Wrapper>
    <SuperThemeProvider>
      <Router />
    </SuperThemeProvider>
  </Wrapper>
);
