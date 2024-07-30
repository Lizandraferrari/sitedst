import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import FaClube from "./paginas/FaClube";
import Cigano from "./paginas/Cigano";

export default function App () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path ="/" element = {< Home /> }></Route>
                    <Route path ="/faclube" element = {< FaClube /> }></Route>
                    <Route path = "/integrantes/cigano" element = {<Cigano />} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}