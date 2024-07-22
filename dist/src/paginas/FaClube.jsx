import Nav from "../components/Nav";
import Cabecalho from "../components/Cabecalho"
import FotoDescricao from "../components/FotoDescricao"
import "../components/layout.css"
import Card from "../components/Card";
import Footer from "../components/Footer";

const x = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nihil, quia quibusdam, explicabo dignissimos eos natus non quaerat distinctio in obcaecati, commodi ad excepturi ipsam iure nulla molestias asperiores numquam!"

export default function FaClube(){
    return (
        <>
                <Cabecalho titulo={"💚 Fã Clube D.S.T Noise💦"}></Cabecalho>
                <Nav></Nav>
                <div>
                <h1>Nossos fãs que já participaram do nosso fã clube:</h1>
                {/* div para as FotoDescricao ficarem responsivas com flexbox */}
                <FotoDescricao></FotoDescricao>
                </div>
                <Card card_titulo={"Quer participar do nosso fã clube?"} card_conteudo ={"Entre em contato conosco pelo nosso instagram: @dst_noise e peça já!. <br>A inscrição custa apenas R$3,33!"} card_cor = {"card_roxo"}></Card>
                <Footer></Footer>
        </>
    )
}