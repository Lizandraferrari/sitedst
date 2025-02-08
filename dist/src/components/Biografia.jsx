import Card from "./Card";
import FotoLink from "./FotoLink";

export default function Biografia({
  foto1,
  foto2,
  instaUser1,
  instaUser2,
  instaLink1,
  instaLink2,
  bio1,
  bio2,
  nome_membro,
  tituloFoto,
}) {
  document.documentElement.style.setProperty('--quadroFoto', '75%');
  return (
    <>
      <div className="pai_responsiva">
        <FotoLink 
          foto={foto1}
          txtlink1={instaUser1}
          link1={instaLink1}
          tituloFoto={tituloFoto}
        ></FotoLink>
        <Card 
          card_titulo={nome_membro}
          card_conteudo={bio1}
          card_cor={"card_roxo"}
        ></Card>
      </div>

      <div className="pai_responsiva">
        <Card card_conteudo={bio2} card_cor={"card_rosa"}></Card>
        <FotoLink
          foto={foto2}
          txtlink1={instaUser2}
          link1={instaLink2}
          tituloFoto={tituloFoto}
        ></FotoLink>
      </div>
    </>
  );
}
