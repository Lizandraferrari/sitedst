import 'bootstrap/dist/css/bootstrap.css';
const insta = "https://www.instagram.com/dst_noise/"
const face = "https://www.facebook.com/dstnoises/"
const git = "https://github.com/Lizandraferrari/sitedst"
const tiktok = "https://www.tiktok.com/@dst_noise"
const ytb = "https://www.youtube.com/@d.s.t_noise"
const spotify = "https://open.spotify.com/intl-pt/artist/0CENBzpPybPod5t8wixfzn"
const zap = "wa.me/5511966696669"

export default function Footer() {
  return (
    <>
      <footer>
        <div class=" footer_estilo">
          <a href={insta}><i class="bi bi-instagram"></i></a>
          <a href={face}><i class="bi bi-facebook"></i></a>
          <a href={tiktok}><i class="bi bi-tiktok"></i></a>
          <a href={ytb}><i class="bi bi-youtube"></i></a>
          <a href={spotify}><i class="bi bi-spotify"></i></a>

          <div class="row">
            <p>Contatos:</p>
          </div>
         {/* <a href={zap}> <i class="bi bi-whatsapp"> +55 11 96669-6669</i></a>*/}
          <div class="row">
            <p>dstnoise@gmail.com</p>
          </div>
        </div>

        <div class = "footer_margem">
          <div class = "row">
            <p>💚 Desenvolvido por Liz  <a href={git}><i class="bi bi-github"></i></a></p>
              </div>
        </div>
    </footer >

        </>
    )
}