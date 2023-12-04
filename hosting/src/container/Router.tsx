import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { checkAuthStatus } from "../store/userStore";
import RouterOutlet from "./Outlet";

import NoMatch from "./NoMatch";
import Splash from "./Splash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterOutlet />,
    children: [
      {
        index: true,
        lazy: () => import("../screens/Home/Home"),
      },
      {
        path: "help",
        lazy: () => import("../screens/Help/Help"),
      },
      {
        path: "terms",
        lazy: () => import("../screens/Terms/Terms"),
      },
      {
        path: "privacy",
        lazy: () => import("../screens/Privacy/Privacy"),
      },
      {
        path: "waitlist",
        lazy: () => import("../screens/Waitlist/Waitlist"),
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
        lazy: () => import("../screens/Discover/Discover"),
      },
      {
        path: "your-profile",
        lazy: () => import("../screens/Profile/Profile"),
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
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <RouterOutlet>
          <Splash />
        </RouterOutlet>
      }
    />
  );
}
