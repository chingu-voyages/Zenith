import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/Zenith",
});
