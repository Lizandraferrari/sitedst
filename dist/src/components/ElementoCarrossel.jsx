import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

{/* 
    Elemento do carrosel não funciona separado. 
********************************************************************************************************************************
                                                                                    Buscar origem do bug
********************************************************************************************************************************
*/}

export default function ElementoCarrossel({ carrossel_titulo, carrossel_paragrafo, carrossel_url }) {
    return (
        <div>
            <Carousel.Item interval={2600}>
                <img
                    className="d-block w-100"
                    src={carrossel_url}
                    alt = {carrossel_titulo}
                />
                <Carousel.Caption>
                    <h3>{carrossel_titulo}</h3>
                    <p>{carrossel_paragrafo}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </div>
    )
}
