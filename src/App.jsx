import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ImagenCripto from './img/imagen-criptos.png';

const Heading = styled.h1`
   font-family : 'Lato', sans-serif;
   color:#FFF;
   text-align: center;
   font-weight: 700;
   margin-top: 80px;
   margin-bottom: 50px;
   font-size: 34px;
   
   &::after{
     content: '';
     width: 125px;
     height: 5px;
     background-color: #66A2FE;
     display: block;
     margin: 10px auto 0 auto;

   }
`
const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
width:90%;
@media (min-width: 992px){
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  column-gap: 2rem;
  
}
`
const Imagen = styled.img`
max-width: 400px;
width:80%;
margin:100px auto 0 auto;
display:block;
`

function App() {
  
  const [monedas, setMonedas] = useState({});
  useEffect (()=>{
  if(Object.keys(monedas).length > 0){

    console.log('desde app.jsx useEffect',monedas)

  }

  },[monedas])

  return (
    <Contenedor>
    <Imagen src={ImagenCripto} alt = 'img_cripto'/>
    <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setMonedas={setMonedas}

        />
    </div>

    </Contenedor>
  )
}

export default App