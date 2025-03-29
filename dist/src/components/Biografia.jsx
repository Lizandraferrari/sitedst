import Card from "./Card";
import FotoLink from "./FotoLink";
import MiniFoto from "./MiniFoto";

export default function Biografia(props) {
  document.documentElement.style.setProperty('--quadroFoto', '75%');

  return (
    <>
    <section id={props.idIntegrante}>
    <h1 style={{marginTop:"5rem" , textAlign:"center"}}>{props.integrante}</h1>
      <div className="pai_responsiva">
        <FotoLink 
          foto={props.foto1}
          txtlink1={"@" + props.instaUser1}
          link1={"https://www.instagram.com/" + props.instaUser1}
          tituloFoto={"Foto por:"}
        ></FotoLink>
        <Card 
          card_conteudo={props.bio1}
          card_cor={"card_roxo"}
        ></Card>
      </div>

      <div className="pai_responsiva">
        <Card 
        card_conteudo={props.bio2} 
        card_cor={"card_rosa"}
        ></Card>
        <FotoLink
          foto={props.foto2}
          txtlink1={"@" + props.instaUser2}
          link1={"https://www.instagram.com/" + props.instaUser2}
          tituloFoto={"Foto por:"}
        ></FotoLink>
      </div>

      <div className="pai_responsiva">
      <MiniFoto
        nome={props.integrante}
        ancora={props.idIntegrante}
      ></MiniFoto>
      </div>
      
      </section>
    </>
  );
}
