import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import logo from "/img/png.png";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg nav_estilo">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} style={{width: "10%"}}/>
        </a>

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
              <a className="nav-link" href="/embreve">
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
                  <a className="dropdown-item" href="/embreve">
                    Edgard Cirilo
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/embreve">
                    May Tsé Tung
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/integrantes/cigano">
                    Diogo Rogério Cigano
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/embreve">
                    Lizandra
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/embreve">
                    Sopa (ex. Integrante)
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/embreve">
                    Todos integrantes
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
