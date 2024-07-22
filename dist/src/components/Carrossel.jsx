import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import foto1 from '../img/jadema.jpeg'
import foto2 from '../img/guitarra.jpg'
import foto3 from '../img/diabodema.jpeg'


export default function Carrossel() { 
return ( 
    <div class = "pai_coluna_fixa" >
	<div class = "filho_carrossel"> 
	<Carousel> 
		<Carousel.Item interval={2600}> 
		<img 
			className="d-block w-100"
src={foto1}
		/> 
		<Carousel.Caption> 
			<h3>Integrantes da D.S.T Noise</h3> 
			<p>Pós ensaio em Diadema</p> 
		</Carousel.Caption> 
		</Carousel.Item> 

        <Carousel.Item interval={2600}> 
		<img 
			className="d-block w-100"
src={foto3}
		/> 
		<Carousel.Caption> 
		<h3>Integrantes da D.S.T Noise</h3> 
		<p>Pós ensaio em Diadema</p> 
		</Carousel.Caption>
        </Carousel.Item> 
	</Carousel> 
	</div> 
    </div>
); 
}