import Biografia from "../components/Biografia";
import Cabecalho from "../components/Cabecalho";
import foto1 from "/img/integrantes/cigano/ciganovisky.png";
import foto2 from "/img/integrantes/cigano/breja.png";

const nome_membro = "Diogo Cigano Rogério 🎸";
const instaLink = "https://www.instagram.com/olhossdevidro/";
const instaUser = "@olhossdevidro";
const bio1 =
  "Nascido em 22/10/1982 na cidade de Santana no Amapá, cresceu em um ambiente fortemente influenciado por bandas como Calcinha Preta, Aviões do Forró, Bonde do Maluco, etc. Aos 14 anos, teve sua primeira guitarra e, devido às suas grandes habilidades com o brega e forró, entrou como músico nas maiores bandas presentes no cenário da época. Porém, por conta da sua pouca idade, tocava escondido atrás dos palcos enquanto um dublê encenava sua performance durante os shows.";
const bio2 =
  "Em 2019, Cigano teve que fugir para Santo André - SP, pois teve um caso com as três esposas de um fazendeiro agiota muito influente na região e foi jurado de morte. Ao chegar no ABC paulista, para continuar praticando a música, sem ser descoberto, e junto a Liz e Maylson montou o conjunto de breganoise D.S.T Noise.";

export default function Cigano() {
    
  return (
    <>
      <Cabecalho titulo={nome_membro}></Cabecalho>
      <Biografia
        bio1={bio1}
        bio2={bio2}
        foto1={foto1}
        foto2={foto2}
        instaLink1={instaLink}
        instaLink2={instaLink}
        instaUser1={instaUser}
        instaUser2={instaUser}
        tituloFoto={"Foto por:"}
      ></Biografia>
    </>
  );
}
