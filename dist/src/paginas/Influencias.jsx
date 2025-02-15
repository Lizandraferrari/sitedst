import Card from "../components/Card";
import Cabecalho from "../components/Cabecalho";

export default function Influencias() {
  const playlists = [
    {
      pessoa: "Lizandra",
      urlPlaylist:
        "https://open.spotify.com/embed/playlist/3CD0hjfvLkwdQY59a79DWe?utm_source=generator",
      recado1:
        "Essa é uma playlist da batera, que também fez esse site lindo e repleto de poluição visual. Fiz uma escolha de uns sons que acho massa, e no geral só tem rock, mais e menos pauleira.",
      recado2: "Recadinho: Escutem Giant Jellyfish melhor banda do mundo.",
    },
  ];

  return (
    <>
      <Cabecalho titulo={"Influências da D.S.T Noise 💣"} />
      {playlists.map((integrante) => (
        <div className="pai_responsiva">
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
