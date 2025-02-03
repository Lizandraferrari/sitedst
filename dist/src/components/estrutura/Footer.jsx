import nosAche from "../../docsJson/redes.json";
const git = "https://github.com/Lizandraferrari/sitedst";

export default function Footer() {
  return (
    <>
      <footer>
        <div className=" footer_estilo">
          {nosAche.map((info) => (
            <a key={info.id} href={info.link} target="_blank">
              {/* <a href={zap}> <i className="bi bi-whatsapp"> +55 11 96669-6669</i></a>*/}
              <i className={info.icone}></i>
            </a>
          ))}

          <div className="row">
            <p>Contatos:</p>
          </div>
          <div className="row">
            <p>dstnoise@gmail.com</p>
          </div>
        </div>

        <div className="footer_margem">
          <div className="row">
            <p>
              💚 Desenvolvido por Liz{" "}
              <a href={git} target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
