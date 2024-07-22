import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'; 

//importe por ultimo a folha personalizada para evitar sobrescrita de CSS padrão do bootstrap
import App from './App.jsx';
import './components/layout.css';

//renderiza os componentes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)

