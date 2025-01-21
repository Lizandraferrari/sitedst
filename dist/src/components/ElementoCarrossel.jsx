import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

{/* 
    Elemento do carrosel não funciona separado. 
********************************************************************************************************************************
                                                                                    Buscar origem do bug
                                                                                    foto não renderiza e trava o carrossel ):
********************************************************************************************************************************
*/}

export default function ElementoCarrossel({ carrossel_titulo, carrossel_paragrafo, carrossel_url }) {
    return (
            <Carousel.Item interval={2600}>
                <img
                    src={carrossel_url}
                    alt = {carrossel_titulo}
                />
                <Carousel.Caption>
                    <h3>{carrossel_titulo}</h3>
                    <p>{carrossel_paragrafo}</p>
                </Carousel.Caption>
            </Carousel.Item>
    )
}
