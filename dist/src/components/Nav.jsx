import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import logo from'../img/png.png';

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg nav_estilo">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={logo} width="10%" /></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Nossas Influências</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Histórico de Shows</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link">Streaming</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/faclube">Nosso Fã Clube</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Os integrantes
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Edgard Cirilo</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">May Tsé Tung</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Diogo Rogério Cigano</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Lizandra</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sopa (ex. Integrante)</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
