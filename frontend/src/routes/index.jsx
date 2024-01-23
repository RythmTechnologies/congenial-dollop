import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const WebLayout = lazy(() => import("@/layouts/web/index"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Home = lazy(() => import("@/pages/home"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
