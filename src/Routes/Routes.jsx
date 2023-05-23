import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Blog from "../pages/Blog/Blog";
import LoginLayout from "../Layouts/LoginLayout";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "blog",
            element: <Blog></Blog>
         }
      ]
   },
   {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: "login",
            element: <Login></Login>
         },
         {
            path: "register",
            element: <Register></Register>
         },
      ],
   },
   {
      path: "*",
      element: <NotFound></NotFound>
   }
]);

export default router;