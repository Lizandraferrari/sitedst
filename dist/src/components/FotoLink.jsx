export default function FotoLink({
  foto,
  txtlink1,
  link1,
  tituloFoto,
  link2,
  link3,
  txtlink2,
  txtlink3,
}) {
  function barraLink(txtlink) {
    if (txtlink) {
      return " | " + txtlink;
    }
  }
  txtlink2 = barraLink(txtlink2);
  txtlink3 = barraLink(txtlink3);

  return (
    <div className="quadroFoto">
      <img src={foto}></img>
      <label>{tituloFoto}</label>
      <div className="pai_responsiva">
        <a href={link1} target="_blank">
          {txtlink1}
        </a>
        <a href={link2} target="_blank">
          {txtlink2}
        </a>
        <a href={link3} target="_blank">
          {txtlink3}
        </a>
      </div>
    </div>
  );
}
