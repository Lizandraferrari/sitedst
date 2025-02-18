import Biografia from "../components/Biografia";
import Cabecalho from "../components/Cabecalho";
import integrantes from "../docsJson/integrantes.json"

export default function Integrantes () {
    return (
        <div>
            <Cabecalho titulo={"Dstesudos 😋"}></Cabecalho>
            {
                integrantes.map((dado) => (
                    <Biografia
                        foto1={dado.foto1}
                        foto2={dado.foto2}
                        instaUser1={dado.instaUser1}
                        instaUser2={dado.instaUser2}
                        instaLink1={dado.instaLink1}
                        instaLink2={dado.instaLink2}
                        bio1={dado.bio1}
                        bio2={dado.bio2}
                        integrante={dado.integrante}
                        idIntegrante={dado.idIntegrante}
                    ></Biografia>
                ))
            }
        </div>
    )
}