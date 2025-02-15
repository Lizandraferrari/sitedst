import Biografia from "../components/Biografia";
import Cabecalho from "../components/Cabecalho";
import foto1 from "/img/maylson1.jpeg"
import foto2 from "/img/maylson2.jpg"

export default function Maylson (){
    const bio1 = `Nascido no povoado de Morro redondo Oeiras-PI, descobriu sua habilidades com os gritos ainda mininote no oficio de vaqueiro gritando pra boiada "eeee boi", e logo entendeu que isso valia também pra lidar com outro tipo de corno.
Junto de seu teclado, Maylson das Teclas fez sucesso nos povoados do interior do Piauí com seu brega gritado que fazia até defunto levanta pra ir tomar uma. `
    const bio2 = `Porém, em 2019 acabou se envolvendo num rebuliço em um forró risca faca, acabando por passar a pexeira em uns 4 cabras e ainda saiu sem levar nenhum arranhão por ter o corpo fechado. Para evitar a pena do xilindró resolveu sair corrido das terras piauienses e buscar novos áres em Santo André-SP, onde conheceu Cigano das Cordas em uma bodega na qual o amapaense viu sua cantoria fazer com que dois homens fossem pro pau por causa de uma mulher.
A partir de então, juntamente a Liz, eles fundaram a banda de breganoise D.S.T Noise`
    const instaLink1 = "https://www.instagram.com/sprite.com.gelado/"
    const instaLink2 = "https://www.instagram.com/mazzei.br/"
    const instaUser1 = "@sprite.com.gelado"
    const instaUser2 = "@mazzei.br"
    
    return (
        <>
            <Cabecalho titulo={"🎹 May Tsé Tung 👨‍🎤"} />
            <Biografia 
                bio1={bio1}
                bio2={bio2}
                foto1={foto1}
                foto2={foto2}
                instaLink1={instaLink1}
                instaLink2={instaLink2}
                instaUser1={instaUser1}
                instaUser2={instaUser2}
                tituloFoto={"Foto por:"}
            ></Biografia>
        </>
    )
}