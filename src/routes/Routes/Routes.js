import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/HomePage/Home/Home";
import LogIn from "../../pages/Login/LogIn";
import Register from "../../pages/Login/Register";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../../layouts/Root");
const { default: ErrorPage } = require("../../pages/ErrorPage/ErrorPage");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;