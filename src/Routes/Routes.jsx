import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Blog from "../pages/Blog/Blog";
import LoginLayout from "../Layouts/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/toys/AllToys/AllToys";
import AddAToy from "../pages/toys/AddAToy/AddAToy";
import MyToys from "../pages/toys/MyToys/MyToys";
import ToyDetails from "../pages/toys/ToyDetails/ToyDetails";
import UpdateToy from "../pages/toys/MyToys/UpdateToy";
import ShopCategory from "../pages/ShopCategory/ShopCategory";
import CategoryDetails from "../pages/ShopCategory/CategoryDetails";

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
         }
      ],
   },
   {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: "/all-toy",
            element: <AllToys></AllToys>,
         },
         {
            path: "/toy-details/:id",
            element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://robotics-toys-server-sagar-ghosh1.vercel.app/toy/${params.id}`),
         },
         {
            path: "/add-toy",
            element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
         },
         {
            path: "/my-toys",
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
         },
         {
            path: "/update/:id",
            element: <UpdateToy></UpdateToy>,
            loader: ({ params }) => fetch(`https://robotics-toys-server-sagar-ghosh1.vercel.app/toy/${params.id}`)
         },
         {
            path: "/category-detail/:id",
            element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://robotics-toys-server-sagar-ghosh1.vercel.app/toy/${params.id}`),
         }
      ]
   },
   {
      path: "*",
      element: <NotFound></NotFound>
   }
]);

export default router;