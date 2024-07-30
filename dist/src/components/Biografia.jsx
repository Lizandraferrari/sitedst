import Footer from "./Footer";
import Card from "./Card";
import Nav from "./Nav"
import FotoInsta from "./FotoInsta";


export default function Biografia({foto1 , foto2 , instaUser1 , instaUser2 , instaLink1 , instaLink2 , bio1 , bio2 , nome_membro}) {
    return (
        <>
            <Nav></Nav>

            <div class="pai_responsivo">

                <div class="row">
                    <div class="col-4">
                        <FotoInsta foto={foto1} instaUser={instaUser1} instaLink={instaLink1}></FotoInsta>
                    </div>
                    <div class="col-8">
                        <Card card_titulo={nome_membro} card_conteudo={bio1} card_cor={"card_roxo"}></Card>
                    </div>
                </div>

                <div class="row">
                    <div class="col-8">
                        <Card card_conteudo={bio2} card_cor={"card_rosa"}></Card>
                    </div>
                    <div class="col-4">
                        <FotoInsta foto={foto2} instaUser={instaUser2} instaLink={instaLink2}></FotoInsta>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </>

    )
}