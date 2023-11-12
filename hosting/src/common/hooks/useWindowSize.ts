import { useEffect, useState } from "react";

export function useWindowSize() {
  const [state, setState] = useState([0, 0]);

  useEffect(() => {
    const handler = () => {
      setState([document.body.offsetWidth, document.body.offsetHeight]);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return state;
}
