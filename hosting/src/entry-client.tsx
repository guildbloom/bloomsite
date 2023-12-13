import ReactDOM from "react-dom/client";
import App from "./app";

import.meta.env.SSR
  ? ReactDOM.hydrateRoot(document.getElementById("root"), <App />)
  : ReactDOM.createRoot(document.getElementById("root")).render(<App />);
