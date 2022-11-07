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

            },
        ]
    }
])

export default router;