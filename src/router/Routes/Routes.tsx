import { createBrowserRouter } from "react-router-dom";
import Home from "../../App";
import AddProduct from "../../pages/Add-product/AddProduct";
import ProductDetails from "../../pages/Product-details/ProductDetails";
import Dashboard from "../../Layout/Dashboard";
import Products from "../../components/ProduuctTable/Products";
import AllProducts from "../../pages/Products/AllProducts";

export const GeneralRouter = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: '/product/:productId',
        element: <ProductDetails />
    },
    {
        path: '/products',
        element: <AllProducts />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '',
                element: <Products />
            },
            {
                path: 'add-product',
                element: <AddProduct />
            },
        ]
    },

])