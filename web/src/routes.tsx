import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import Configuracao from "./pages/Configuracao";

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
        path: '/configuracao',
        element: <Configuracao/>
    },
    {
        path: '/perfil/:id',
        element: <Perfil/>
    }
])
