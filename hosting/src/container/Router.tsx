import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuthStatus } from "../store/userStore";
import RouterOutlet from "./Outlet";

import NoMatch from "./NoMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterOutlet />,
    loader: async () => {
      await checkAuthStatus();
      return null;
    },
    children: [
      {
        index: true,
        lazy: () => import("../views/home/Home"),
      },
    ],
  },
  {
    path: "/app",
    element: <RouterOutlet />,
    shouldRevalidate: () => true,
    loader: async () => {
      await checkAuthStatus();
      return null;
    },
    children: [
      {
        index: true,
        lazy: () => import("../views/discover/Discover"),
      },
      {
        path: "fake",
        lazy: () => import("../views/home/Home"),
      },
    ],
  },
  {
    path: "*",
    element: (
      <RouterOutlet>
        <NoMatch />
      </RouterOutlet>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<RouterOutlet />} />;
}
