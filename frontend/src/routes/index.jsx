import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Projects from "@/pages/projects/index";
import ProjectDetail from "@/pages/project-detail/index";
import NotFound from "@/pages/not-found";

const WebLayout = lazy(() => import("@/layouts/web/index"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Home = lazy(() => import("@/pages/home"));
const Blog = lazy(() => import("@/pages/blog"));
const Works = lazy(() => import("@/pages/works"));

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },

      {
        path: "/projects/:slug",
        element: <ProjectDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
