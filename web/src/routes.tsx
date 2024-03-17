import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/perfil/:id',
        element: <Perfil/>
    }
])
