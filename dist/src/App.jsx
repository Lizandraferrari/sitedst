import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import FaClube from "./paginas/FaClube";

export default function App () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path ="/" element = {< Home /> }></Route>
                    <Route path ="/faclube" element = {< FaClube /> }></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}