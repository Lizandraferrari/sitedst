import Cabecalho from "../components/Cabecalho";
import FotoInsta from "../components/FotoInsta";
import raimc from "/img/raimc.jpg";
import marginal from "/img/marginal.jpg";
import demo from "/img/demo.jpg";
import sucessos from "/img/sucessos.jpg";
import fita from "/img/fita.jpg";
const linkRaimc = "https://dstnoisecore.bandcamp.com/track/r-a-i-m-c";
const linkCoronga =
  "https://dstnoisecore.bandcamp.com/album/demo-coronga-v-rus";
const linkMarginal =
  "https://dordistro.bandcamp.com/album/seja-marginal-seja-her-i";

export default function Discografia() {
  return (
    <>
      <Cabecalho titulo={"Discografia 💽"}></Cabecalho>
      <div class="quebra_responsiva">
        <FotoInsta
          foto={raimc}
          tituloFoto={"Rápido e agressivo igual um militar cheirado (2019)"}
          instaUser={"BandCamp"}
          instaLink={linkRaimc}
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
      </div>
    </>
  );
}
