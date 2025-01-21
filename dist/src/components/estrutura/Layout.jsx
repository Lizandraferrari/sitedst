import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(){
    return (
        <div className=" layout ">
            <Nav></Nav>
            <main className="preenchimento">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}