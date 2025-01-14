import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(){
    return (
        <div className="">
            <Nav></Nav>
            <main className="">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}