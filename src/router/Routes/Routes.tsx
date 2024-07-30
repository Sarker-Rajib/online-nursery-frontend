import { createBrowserRouter } from "react-router-dom";
import Home from "../../App";
import AddProduct from "../../pages/Add-product/AddProduct";

export const GeneralRouter = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: '/add-product',
        element: <AddProduct />
    },

])