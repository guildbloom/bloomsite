import { createRoot } from "react-dom/client";
import "./firebase";

import "./theme/stylesheets/index.css";

import Router from "./container/Router";
import { SuperThemeProvider } from "react-elevated-emotion";

const root = createRoot(document.getElementById("root"));

root.render(
  <SuperThemeProvider>
    <Router />
  </SuperThemeProvider>
);
