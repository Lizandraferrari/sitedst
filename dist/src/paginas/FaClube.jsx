import Cabecalho from "../components/Cabecalho";
import FotoDescricao from "../components/FotoDescricao";
import "../components/layout.css";
import Card from "../components/Card";
import listaFas from "../docsJson/fas.json";

export default function FaClube() {
  const conteudo = "A inscrição custa apenas R$3,33!";
  const conteudo2 =
    "Entre em contato conosco pelo nosso instagram: @dst_noise e peça já!.";
  const dm = "https://ig.me/m/dst_noise";
  return (
    <>
      <Cabecalho titulo={"💚 Fã Clube D.S.T Noise💦"}></Cabecalho>
      <div className="">
        <Card
          card_titulo={"Quer participar do nosso fã clube?"}
          card_conteudo={conteudo}
          card_conteudoli={conteudo2}
          card_cor={"card_roxo"}
          link={dm}
        ></Card>
        <h1 style={{ textAlign: "center" }}>
          Nossos fãs que já participaram do nosso fã clube:
        </h1>
        <div className="agrupa_itens">
          {listaFas.map((info) => (
            <FotoDescricao foto={info.foto} nome={info.nome}></FotoDescricao>
          ))}
        </div>
      </div>
    </>
  );
}
