import nosAche from "../../docsJson/redes.json";

export default function Footer() {
  const zap = "https://wa.me/5511959558735?text=Oiee,%20queria%20falar%20sobre%20a%20D.S.T%20Noise%20com%20vc%20(:"
  return (
    <>
      <footer>
        <div className=" footer_estilo">
          {nosAche.map((info) => (
            <a key={info.id} href={info.link} target="_blank">
              <i className={info.icone}></i>
            </a>
          ))}

          <div className="row">
            <p>Contatos:</p>
          </div>
          <div className="row">
          <a style={{textDecoration: "none" }} href={zap} target="_blank"> <i className="bi bi-whatsapp"> +55 11 95955-8735</i></a>
            <p>dstnoise@gmail.com</p>
          </div>
        </div>

        <div className="footer_margem">
          <div className="row">
            <p>
              💚
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
