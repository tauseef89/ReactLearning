import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import About from "../page/about";

const Router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default Router;
