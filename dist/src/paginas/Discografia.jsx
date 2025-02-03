import Cabecalho from "../components/Cabecalho";
import FotoInsta from "../components/FotoInsta";
import raimc from "/img/raimc.jpg";
import marginal from "/img/marginal.jpg";
import demo from "/img/demo.jpg";
import sucessos from "/img/sucessos.jpg";
import fita from "/img/fita.jpg"
import protocolo from "/img/protocolo anti reptiliano.jpg"
import presencavip from "/img/presencavip.jpg"
import monkey from "/img/monkey.jpg"
const linkRaimc = "https://dstnoisecore.bandcamp.com/track/r-a-i-m-c";
const linkCoronga =
  "https://dstnoisecore.bandcamp.com/album/demo-coronga-v-rus";
const linkMarginal =
  "https://dordistro.bandcamp.com/album/seja-marginal-seja-her-i";
const linkProtocoloS = "https://open.spotify.com/intl-pt/album/60npubwIkhDBKdrTuAm1j4"
export default function Discografia() {
  return (
    <>
      <Cabecalho titulo={"Discografia 💽"}></Cabecalho>
      <div class="agrupa_itens">
        <FotoInsta
          foto={raimc}
          tituloFoto={"Rápido e agressivo igual um militar cheirado (2019)"}
          instaUser={"BandCamp"}
          instaLink={linkRaimc}
          link1={"https://www.youtube.com/watch?v=wwpMPOJEozM"}
          txtlink1={"Youtube"}
        ></FotoInsta>
        <FotoInsta
          foto={demo}
          tituloFoto={"Coronga Vírus (2020)"}
          instaUser={"BandCamp"}
          instaLink={linkCoronga}
        ></FotoInsta>
        <FotoInsta
          foto={fita}
          tituloFoto={"Quarentine days are hell (2020)"}
          instaUser={"Apenas Midia Física"}
        ></FotoInsta>
        <FotoInsta
          foto={sucessos}
          tituloFoto={"20 super sucessos (2020)"}
          instaUser={"Apenas Midia Física"}
        ></FotoInsta>

        <FotoInsta
          foto={marginal}
          tituloFoto={"Seja Marginal, Seja Her​ó​i (2021)"}
          instaUser={"BandCamp"}
          instaLink={linkMarginal}
        ></FotoInsta>

        <FotoInsta
          foto={protocolo}
          tituloFoto={"Protocolo Antirreptiliano (2022)"}
          instaUser={"Spotify"}
          instaLink={linkProtocoloS}
          link1={"https://dstnoisecore.bandcamp.com/album/protocolo-antirreptiliano"}
          txtlink1={"BandCamp"}
          link2={"https://www.youtube.com/watch?v=83Nsgm-N2SY&list=OLAK5uy_nIeOBMadn4Pb0b1tonn9gbofPXJ3pXp1k&index=1"}
          txtlink2={"Youtube"}
        ></FotoInsta>

        <FotoInsta
          foto = {presencavip}
          tituloFoto={"Presença Vip no Bar do Baiano (2023)"}
          instaUser={"Spotify"}
          instaLink={"https://open.spotify.com/intl-pt/album/2i0YYabAxE3yzXotQXmiUX"}
          link1={"https://dstnoisecore.bandcamp.com/album/presen-a-vip-no-bar-do-baiano-2"}
          txtlink1={"BandCamp"}
          link2={"https://www.youtube.com/watch?v=7IgwM7Xn78w&list=OLAK5uy_kmCwqIHp8zaKM4-5JFQhaVJItrU3SL6XQ&index=1"}
          txtlink2={"Youtube"}
        ></FotoInsta>

        <FotoInsta
          foto = {monkey}
          tituloFoto={"Monkey vs Monkey - Split (2024)"}
          instaUser={"BandCamp"}
          instaLink={"https://dstnoisecore.bandcamp.com/album/monkey-vs-monkey"}
          txtlink1={"Youtube"}
          link1={"https://www.youtube.com/watch?v=1R4Pt_FX1OU"}

        ></FotoInsta>
      </div>
    </>
  )

}
