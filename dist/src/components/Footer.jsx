import 'bootstrap/dist/css/bootstrap.css';

const insta = "https://www.instagram.com/dst_noise/"
const face = "https://www.facebook.com/dstnoises/"


export default function Footer(){
    <div class="container footer_estilo">
  <footer class="d-flex flex-wrap justify-content-between  py-3 my-4">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-muted">💚 Desenvolvido por Liz 💚
      </span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#github"></use></svg></a></li>
      <li class="ms-3"><a class="text-muted" href={insta}><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-muted" href={face}><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </footer>
</div>
}