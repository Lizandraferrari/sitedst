import jason from "../img/fas.json"
import teste from "../img/carteirinhas/66600 Carteirinha fã clube ANDRE FIOVARANTE.png"
export default function FotoDescricao (  ) {
    return (
        <div class = "card_foto_descricao">
            <div class = "row">
            <img src={teste}></img>
            </div>
            <div class = "row">
            <h4>{ jason[0].nome }</h4>
            </div>
        </div>
    )
}
