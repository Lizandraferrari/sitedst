import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Cabecalho from "../components/Cabecalho";
import FotoLink from "../components/FotoLink";
import data from "../docsJson/merch.json";

export default function Merch() {
  const [statusFiltro, setStatusFiltro] = useState("Todos");

  const filtraPorStatus = (status) => {
    setStatusFiltro(status);
  };

  const produtosFiltrados =
    statusFiltro == "Todos"
      ? data
      : data.filter((item) => {
          if (statusFiltro == "Disponível") {
            return (
              item.status == "Disponível" || item.status == "Disponível para encomenda"
            )
          } else {
            return item.status == statusFiltro;
          }
        });

  function linkCompra(disponibilidade) {
    return disponibilidade == "Esgotado" ? null : "https://ig.me/m/dst_noise";
  }

  return (
    <>
      <Cabecalho titulo={"Comprem Merch 🎁"} />
    <h1 style={{textAlign:"center" , marginTop:"3rem"}}>
        Merchs da D.S.T
    </h1>
      <div className="recuo-direita">
        <label>Filtrar por disponibilidade:</label>
        <Dropdown>
          <Dropdown.Toggle as="button" className="seletor">
            {statusFiltro}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filtraPorStatus("Todos")}>
              Todos
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => filtraPorStatus("Disponível")}>
              Disponível
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => filtraPorStatus("Esgotado")}>
              Esgotado
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="agrupa_itens">
        {produtosFiltrados.map((item, i) => (
          <FotoLink
            key={i}
            foto={item.imagem}
            tituloFoto={item.nome}
            txtlink1={item.status}
            link1={linkCompra(item.status)}
          />
        ))}
      </div>
    </>
  );
}
