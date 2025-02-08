import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paginas/Home";
import Cigano from "./paginas/Cigano";
import Discografia from "./paginas/Discografia";
import FaClube from "./paginas/FaClube";
import Layout from "./components/estrutura/Layout";
import EmBreve from "./paginas/EmBreve";
import Shows from "./paginas/Shows";
import Maylson from "./paginas/Maylson";

export default function Rotas() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/discografia",
          element: <Discografia />,
        },

        {
          path: "/faclube",
          element: <FaClube />,
        },

        {
          path: "/embreve",
          element: <EmBreve />,
        },

        {
          path: "/shows",
          element: <Shows />,
        },

        {
          path: "/integrantes/cigano",
          element: <Cigano />, // fazer a /integrantes e ajeitar para receber uma variavel do nome
        },

        {
          path: "/integrantes/maylson",
          element: <Maylson />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
