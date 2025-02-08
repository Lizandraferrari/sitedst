import Cabecalho from "../components/Cabecalho";
import FotoLink from "../components/FotoLink";
import plays from "../docsJson/plays.json";

export default function Discografia() {
  return (
    <>
      <Cabecalho titulo={"Discografia 💽"}></Cabecalho>
      <div className="agrupa_itens">
        {plays.map((info) => (
          <FotoLink
            key={info.id}
            foto={info.foto}
            tituloFoto={info.titulo}
            txtlink1={info.plataforma1}
            link1={info.link1}
            txtlink2={info.plataforma2}
            link2={info.link2}
            txtlink3={info.plataforma3}
            link3={info.link3}
          ></FotoLink>
        ))}
      </div>
    </>
  );
}
