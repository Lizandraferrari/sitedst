export default function Card({
  card_titulo,
  card_conteudo,
  card_cor,
  card_conteudoit,
  card_conteudoli,
  link,
}) {
  return (
    <div className={card_cor}>
      <h2>{card_titulo}</h2>
      <p>{card_conteudo}</p>
      <p style={{ fontStyle: "italic" }}>{card_conteudoit}</p>
      <a
        style={{ textDecoration: "underline", color: "#2c22ba" }}
        href={link}
        target="_blank"
      >
        {card_conteudoli}
      </a>
    </div>
  );
}
