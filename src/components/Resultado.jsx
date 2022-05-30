import styled from "@emotion/styled"

const Contenedor = styled.div`
padding:15px;
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
justify-content: space-around;
align-items: center;
gap: 5px;
border: 1px solid gray;
border-radius: 8px;
box-shadow: 10px 10px 12px black;


`

const Texto = styled.p`
font-size: 16px;
span{
    font-weight: 700;
}
@media (max-width: 720px){
    font-size: 12px; 
  
}
`

const Precio = styled.p`
font-size: 20px;
span{
    font-weight: 700;
}
@media (max-width: 720px){
    font-size: 15px; 
  
}
`

const Imagen = styled.img`
  display: block;
  width: 120px;
  @media (max-width: 720px){
    width: 75px;
  
}
`


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE}= resultado
    
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt = 'imagen cripto'/>
       <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Var. últimas 24H: <span>{CHANGEPCT24HOUR} %</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
       </div>
        
    </Contenedor>
  )
}

export default Resultado