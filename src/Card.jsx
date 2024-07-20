
function Card({ card_titulo , card_conteudo , card_cor}) {
    return (
        <div class = {card_cor}>
            <h2>
                {card_titulo}
            </h2>
            <p>
            {card_conteudo}
            </p>
        </div>
    )
}

export default Card