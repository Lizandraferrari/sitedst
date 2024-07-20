import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

export default function Carrossel() { 
return ( 
    <div class = "pai_coluna_fixa" >
	<div class = "filho_carrossel"> 
	<Carousel> 
		<Carousel.Item interval={2600}> 
		<img 
			className="d-block w-100"
src="./img/ftsBanda/diabodema.jpeg"
		/> 
		<Carousel.Caption> 
			<h3>Integrantes da D.S.T Noise</h3> 
			<p>Pós ensaio em Diadema</p> 
		</Carousel.Caption> 
		</Carousel.Item> 

		<Carousel.Item interval={2600}> 
		<img 
			className="d-block w-100"
src="./img/ftsBanda/guitarra.jpg"
		/> 
		<Carousel.Caption> 
			<h3>Guitarra do cigano</h3> 
			<p>Show da FunHouse.
                Foto: @seila
                </p> 
		</Carousel.Caption> 
		</Carousel.Item> 

        <Carousel.Item interval={2600}> 
		<img 
			className="d-block w-100"
src="./img/ftsBanda/capa.png"
		/> 
		<Carousel.Caption> 
			<h3></h3> 
			<p></p> 
		</Carousel.Caption>
        </Carousel.Item> 
	</Carousel> 
	</div> 
    </div>
); 
}

