import misato from "/img/misato.jpg";
import { useNavigate } from "react-router-dom";

export default function MiniFoto({ ancora, nome }) {
  const rota = "/influencias#" + ancora;
  const navigate = useNavigate();

  const clicavel = () => {
    navigate(rota);
  };
  return (
    <>
      <div className="miniFoto" onClick={clicavel}>
        <img src={misato}></img>
        <a href={clicavel}>Confira uma playlist especial feita por {nome}</a>
      </div>
    </>
  );
}
