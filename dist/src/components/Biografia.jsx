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
  integrante,
  idIntegrante,
}) {
  document.documentElement.style.setProperty('--quadroFoto', '75%');

  return (
    <>
    <section id={idIntegrante}>
    <h1 style={{marginTop:"5rem" , textAlign:"center"}}>{integrante}</h1>
      <div className="pai_responsiva">
        <FotoLink 
          foto={foto1}
          txtlink1={instaUser1}
          link1={instaLink1}
          tituloFoto={"Foto por:"}
        ></FotoLink>
        <Card 
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
          tituloFoto={"Foto por:"}
        ></FotoLink>
      </div>
{/*
      <div className="pai_responsiva">
      <MiniFoto
        nome={integrante}
        caminho={idIntegrante}
      ></MiniFoto>
      </div>
       */}
      </section>
    </>
  );
}
