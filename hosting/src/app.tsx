import { createRoot } from "react-dom/client";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import "./firebase";

import "./theme/stylesheets/index.css";

import Router from "./container/Router";
import { SuperThemeProvider } from "react-elevated-emotion";
import { botPing } from "./api/bot";

const root = createRoot(document.getElementById("root"));

botPing().then(console.log);

root.render(
  <MetaMaskUIProvider
    debug
    sdkOptions={{
      dappMetadata: {
        name: "GuildBloom",
        url: location.href,
      },
    }}
  >
    <SuperThemeProvider>
      <Router />
    </SuperThemeProvider>
  </MetaMaskUIProvider>
);
