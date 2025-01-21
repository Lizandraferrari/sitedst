
export default function FotoDescricao ({ foto , nome }) {
    return (
        <div class = "card_foto_descricao">
            <div class = "row">
            <img src={foto}></img>
            </div>
            <div class = "row">
            <h4>{ nome }</h4>
            </div>
        </div>
    )
}
