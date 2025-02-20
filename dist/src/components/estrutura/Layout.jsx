import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location])

  return (
    <div className=" layout ">
      <Nav></Nav>
      <main className="preenchimento">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
