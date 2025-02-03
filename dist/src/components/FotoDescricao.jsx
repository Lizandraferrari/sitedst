export default function FotoDescricao({ foto, nome }) {
    
  return (
    <div className="card_foto_descricao">
      <div className="row">
        <img src={foto}></img>
      </div>
      <div className="row">
        <h4>{nome}</h4>
      </div>
    </div>
  );
}
