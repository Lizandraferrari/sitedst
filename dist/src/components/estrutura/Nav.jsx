import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import logo from "/img/logopreta.png";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate()
  let rota
  const integrante = (pessoa) => {
    rota = "/integrantes#" + pessoa
    navigate(rota)
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md nav_estilo" id = "inicio">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/influencias">
                Nossas Influências
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/shows">
                Histórico de Shows
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/discografia">
                Discografia
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/faclube">
                Nosso Fã Clube
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Os integrantes
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item navLink" onClick={() => integrante("edgard")}>
                    Edgard Cirilo
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item navLink" onClick={() => integrante("maylson")}>
                    Maylson das Teclas
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item navLink" onClick={() => integrante("cigano")}>
                    Diogo Rogério Cigano
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item navLink" onClick={() => integrante("lizandra")}>
                    Lizandra
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item navLink" href="/embreve">
                    Sopa (ex. Integrante)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="navbar-brand justify-content-end " href="/">
          <img className=" " src={logo} style={{ width: "3.5rem" }} />
        </a>
      </div>
    </nav>
  );
}
