import WebLayout from "@/layouts/web/index";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

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
