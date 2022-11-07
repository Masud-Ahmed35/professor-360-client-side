import Home from "../../pages/HomePage/Home/Home";

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
        ]
    }
])

export default router;