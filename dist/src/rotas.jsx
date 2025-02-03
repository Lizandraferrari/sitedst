import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paginas/Home";
import Cigano from "./paginas/Cigano";
import Discografia from "./paginas/Discografia"
import FaClube from "./paginas/FaClube"
import Layout from "./components/estrutura/Layout";
import EmBreve from "./paginas/EmBreve";

export default function Rotas () {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/" , element: < Home />
                },

                {
                    path: "/discografia" , element: <Discografia />
                },

                {
                    path: "/faclube" , element: < FaClube />
                },

                {
                    path: "/embreve" , element: <EmBreve />
                },

                {
                    path: "/integrantes/cigano" , element: <Cigano /> // fazer a /integrantes e ajeitar para receber uma variavel do nome
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}