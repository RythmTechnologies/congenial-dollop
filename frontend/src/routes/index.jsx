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
const Academy = lazy(() => import("@/pages/academy"));

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
        path: "/hakkimizda",
        element: <About />,
      },
      {
        path: "/topluluk/blog",
        element: <Blog />,
      },
      {
        path: "/iletisim",
        element: <Contact />,
      },
      {
        path: "/rythm-akademi",
        element: <Academy />,
      },
      {
        path: "/projeler",
        element: <Projects />,
      },

      {
        path: "/projeler/:slug",
        element: <ProjectDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
