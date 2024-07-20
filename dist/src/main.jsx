import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import 'bootstrap/dist/css/bootstrap.css'; 

//importe por ultimo a folha personalizada para evitar sobrescrita de CSS padrão do bootstrap
import 'layout.css'

//renderiza os componentes
const release =          
`  
Surgida em 2019, a banda D.S.T. Noise foi formada no ABC Paulista, atualmente contando com Cigano na guitarra, Lizandra na bateria, Maylson e Edgard na voz. 
Desde sua formação, o quarteto tem seu foco principal na experimentação com o noisecore, grind e brega. Seu primeiro álbum foi “Protocolo Antireptiliano” que conta com 11 faixas e 11 minutos. 
No fim de 2023, a banda lançou seu mais novo álbum, “Presença Vip no Bar do Baiano”, onde houve um foco maior em intercalar o noisecore com as referências do brega. Em comemoração foi realizada a tour “No brega nós cremos” passando pelo Paraná e São Paulo durante o início de 2024.
`
const titulo = "Sobre a banda D.S.T Noise"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Card card_conteudo={release}  card_titulo={titulo} card_cor={"card_roxo"}/>
    
  </React.StrictMode>,
)

