import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategorizedHome from "../Pages/CategorizedHome/CategorizedHome";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                loader: () => fetch('/news.json'),
                element: <Home></Home>
            }, 
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }, 
            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                element: <CategorizedHome></CategorizedHome>
            }
        ]
    }
]);

export default routes;