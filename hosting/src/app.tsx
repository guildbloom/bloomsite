import { createRoot } from "react-dom/client";

import "./firebase";
import { auth, loginWithDiscord } from "./firebase";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      {!auth.currentUser ? (
        <button onClick={loginWithDiscord}>Login With Discord</button>
      ) : (
        JSON.stringify(auth.currentUser, null, 2)
      )}
    </div>
  );
}

root.render(<App />);
