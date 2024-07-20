class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Ativo</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>

  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Ação</a>
      <a class="dropdown-item" href="#">Outra ação</a>
      <a class="dropdown-item" href="#">Algo mais aqui</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Link isolado</a>
    </div>
  </li>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Desativado</a>
</nav>
`
}
}

customElements.define('header-component', Header);