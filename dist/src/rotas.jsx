import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paginas/Home";
import Discografia from "./paginas/Discografia";
import FaClube from "./paginas/FaClube";
import Layout from "./components/estrutura/Layout";
import EmBreve from "./paginas/EmBreve";
import Shows from "./paginas/Shows";
import Influencias from "./paginas/Influencias";
import Integrantes from "./paginas/Integrantes";
import Merch from "./paginas/Merch";

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
          path: "/influencias",
          element: <Influencias />,
        },

        {
          path: "/integrantes",
          element: <Integrantes  />, 
        } ,
        {
          path:"/merch",
          element:<Merch></Merch>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
