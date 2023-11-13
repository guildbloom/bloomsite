import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuthStatus } from "../store/userStore";
import RouterOutlet from "./Outlet";

import NoMatch from "./NoMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterOutlet />,
    children: [
      {
        index: true,
        lazy: () => import("../views/Home2/Home"),
      },
      {
        path: "help",
        lazy: () => import("../views/Help/Help"),
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
        lazy: () => import("../views/Discover/Discover"),
      },
      {
        path: "profile",
        lazy: () => import("../views/Profile/Profile"),
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
