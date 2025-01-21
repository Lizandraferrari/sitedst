import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../img/jadema.jpeg'
import foto2 from '../img/guitarra.jpg'
import foto3 from '../img/diabodema.jpeg'
import ElementoCarrossel from './ElementoCarrossel';


export default function Carrossel() {
	return (
		<div className='carrossel'>
			<Carousel>
				<Carousel.Item interval={2600}>
					<img src={foto1}
					/>
					<Carousel.Caption>
						{/* 
					<h3>Integrantes da D.S.T Noise</h3> 
		<p>Pós ensaio em Diadema</p> 
			*/}
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item interval={2600}>
					<img src={foto3}
            className="d-block w-100"
					/>
					<Carousel.Caption>
						{/* 
					<h3>Integrantes da D.S.T Noise</h3> 
		<p>Pós ensaio em Diadema</p> 
			*/}
					</Carousel.Caption>
				</Carousel.Item>
				
			</Carousel>
		</div>
	);
}