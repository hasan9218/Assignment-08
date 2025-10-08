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
        hydrateFallbackElement:<p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: ()=> fetch('./trending.json'),
            },
            {
                path: "/products",
                element: <Products />,
                loader: ()=> fetch('./trending.json'),
            },
            {
                path: "/install",
                element: <Install />,
                loader: ()=> fetch('./trending.json'),
            },

        ],
    },
    
]);

export default router;