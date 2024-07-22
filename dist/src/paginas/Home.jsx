import Card from "../components/Card";
import Nav from "../components/Nav";
import Cabecalho from "../components/Cabecalho"
import "../components/layout.css"
import Carrossel from "../components/Carrossel"
import Footer from "../components/Footer";
const release =
    `  
Surgida em 2019, a banda D.S.T. Noise foi formada no ABC Paulista, atualmente contando com Cigano na guitarra, Lizandra na bateria, Maylson e Edgard na voz. 
Desde sua formação, o quarteto tem seu foco principal na experimentação com o noisecore, grind e brega. Seu primeiro álbum foi “Protocolo Antireptiliano” que conta com 11 faixas e 11 minutos. 
No fim de 2023, a banda lançou seu mais novo álbum, “Presença Vip no Bar do Baiano”, onde houve um foco maior em intercalar o noisecore com as referências do brega. Em comemoração foi realizada a tour “No brega nós cremos” passando pelo Paraná e São Paulo durante o início de 2024.
`
const titulo_paragrafo = "Sobre a banda D.S.T Noise"
export default function Home() {
    return (
        <>
            <Cabecalho titulo={"D.S.T Noise"}></Cabecalho>
            <Nav></Nav>
            <div class="pai_responsiva">
                <div class="col-6">
                    <Card card_conteudo={release} card_titulo={titulo_paragrafo} card_cor={"card_roxo"} />
                </div>
                <div class="col-6">
                    <Carrossel></Carrossel>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}