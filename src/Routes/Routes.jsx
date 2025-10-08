import { createBrowserRouter } from "react-router";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import MainLayout from "../Layoutes/MainLayout";
import Error from "../Pages/Error";
import Install from "../Pages/Install";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/install",
                element: <Install />
            },

        ],
    },
    
]);

export default router;