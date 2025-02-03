import roles from "../docsJson/roles.json";
import Cabecalho from "../components/Cabecalho";

export default function Shows() {
  return (
    <>
      <Cabecalho titulo={"🏃‍♀️ Histórico de Shows 🕺"}></Cabecalho>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "3rem" }}>
          Rolês de 2024:
        </h1>
      </div>
      <div className="agrupa_itens">
        {roles.map((role) => (
          <div className="flyer">
            <img src={role.imagem}></img>
            <h5>{role.evento}</h5>
            <p>{role.data}</p>
          </div>
        ))}
      </div>
    </>
  );
}
