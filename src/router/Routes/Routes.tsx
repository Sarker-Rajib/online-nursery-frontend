import { createBrowserRouter } from "react-router-dom";
import Home from "../../App";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

export const GeneralRouter = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
])