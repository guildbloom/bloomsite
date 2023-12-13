import ReactDOMServer from "react-dom/server";
import App from "./app";

export function render() {
  const html = ReactDOMServer.renderToString(<App />);
  return { html };
}
