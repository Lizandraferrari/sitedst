import Card from "../components/Card";
import Cabecalho from "../components/Cabecalho";
import playlists from "../docsJson/recomendacoes.json"
export default function Influencias() {

  return (
    <>
      <Cabecalho titulo={"Influências da D.S.T Noise 💣"} />
      {playlists.map((integrante) => (
        <div className="pai_responsiva" style={{marginTop:"4rem"}}>
          <div>
            {/* colocar uma dollz */}
            <h2 style={{ textAlign: "center" }}>
              Sonzeras escolhidas por: {integrante.pessoa}
            </h2>
            <Card
              card_cor={"card_roxo"}
              card_conteudo={integrante.recado1}
              card_conteudoit={integrante.recado2}
            ></Card>
          </div>
          <div className="spotify">
            <iframe
              src={integrante.urlPlaylist}
              width="100%"
              height="352"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      ))}
    </>
  );
}
