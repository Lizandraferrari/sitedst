import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import roles from "../docsJson/roles.json";
import Cabecalho from "../components/Cabecalho";

export default function Shows() {
  let shows = roles //só pra evitar bug 
  const [ordemDecrescente, setOrdemDecrescente] = useState(false);
  const [ordem, setOrdem] = useState("Mais antigo")

  const alteraOrdem = (valor) => {
    setOrdemDecrescente(valor == "desc")
    setOrdem(valor == "asc" ? "Mais antigo" : "Mais novo")
  } // Função para responsividade do dropdown, pra ficar escrito a ordem, sempre q mexer

  const ordenarShows = () => {
    return [...shows].sort((a, b) =>
        ordemDecrescente
          ? new Date(b.data) - new Date(a.data) //ao subtrair permite saber qual é a data mais antiga, de acordo com a diferença
          : new Date(a.data) - new Date(b.data) 
    );
  };

  const agruparPorAno = (listaOrdenada) => { //função pra separar os anos em uma array especifica pra ficar com a tag do ano
    const mapaAno = new Map(); 

    listaOrdenada.forEach((role) => {
      const ano = new Date(role.data).getFullYear()
      if (!mapaAno.has(ano)) { //vê se tem o ano já separado
        mapaAno.set(ano, [])
      }
      mapaAno.get(ano).push(role) //bota o role dentro do respectivo ano aqui
    })
    return mapaAno;
  }

  const showsOrdenados = ordenarShows();
  const eventosPorAno = agruparPorAno(showsOrdenados);

  return (
    <>
      <Cabecalho titulo={"🏃‍♀️ Histórico de Shows 🕺"}></Cabecalho>
      <div className="recuo-direita">
        <label>Ordenar shows por:</label>
        <Dropdown>
          <Dropdown.Toggle as="button" className="seletor">
            {ordem}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="navLink"
              onClick={() => alteraOrdem("asc")}
            >
              Mais antigo
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className="navLink"
              onClick={() => alteraOrdem("desc")}
            >
              Mais novo
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {[...eventosPorAno.keys()].map((ano) => ( //foi separado por ano, ai só pega o elemento do argumento
        <div key={ano} style={{ marginTop: "3rem" }}>
          <h1 style={{ textAlign: "center" }}>Rolês de {ano}:</h1>
          <div className="agrupa_itens">

            {eventosPorAno.get(ano).map((role, index) => ( // renderiza com base no ano
              <div key={index} className="flyer">
                <img src={role.imagem} />
                <h5>{role.evento}</h5>
                <p>{role.dataBR}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
