import {useState} from 'react'
import styled from 'styled-components'

const Cliente= (props)=> {
    //const [forecast]=useState(props.forecast)
    console.log(props.backendData)
  return (
    <Container>
      <Nome>{forecast.title}</Nome>
      <ul>
     <InfoList> Email:{forecast.consolidated_weather[0].the_temp.toFixed(1)}°C</InfoList> 
     <InfoList>CPF:{forecast.consolidated_weather[0].min_temp.toFixed(1)}°C</InfoList> 
     <InfoList> Endereço:{forecast.consolidated_weather[0].max_temp.toFixed(1)}°C</InfoList>
     <InfoList> Observacao: {forecast.consolidated_weather[0].weather_state_name}</InfoList>
     <InfoList> Celular: {forecast.consolidated_weather[0].weather_state_name}</InfoList>
     <InfoList> Nascimento: {forecast.consolidated_weather[0].weather_state_name}</InfoList>

     </ul>
     </Container>
  );
}

const Container=styled.div`
text-align:center;
font-size:30px;

`
const Icon=styled.img`
padding-left:20px;
width:40px;
position: relative;
top: 5px;
`
const IconContainer=styled.div`
display:block ruby;
`
const Nome=styled.h1`
font-size: 50px;
padding: 20px;
`
const InfoList=styled.li`
padding: 20px;
`

export default Cliente;
