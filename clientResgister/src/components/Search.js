import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Axios from 'axios'



const Search = (props) => {
    const [searchNome,setSearchNome]=useState('')
    const [searchEmail,setSearchEmail]=useState('')
    const [loading,setLoading]=useState(false)
    function deletar(e){
     props.setBackendData(props.backendData.filter(data=>data._id!==e.target.id))
        Axios.post('https://tranquil-shelf-46464.herokuapp.com/users/delete',{id:e.target.id}).then(()=>console.log(`yepp`))
    }
    useEffect(()=>{
     // if(props.backendData[0].nome){
     // }
     
      console.log('loading')
    },[props.backendData])

    return (
        <div>
           
          <div className='input-container'>
    <input className='Search-Nome' type='text' placeholder='Procurar Nome...' onChange={e=>setSearchNome(e.target.value)}/>
    <input className='Search-Email' type='text' placeholder='Procurar Email...' onChange={e=>setSearchEmail(e.target.value)}/>
    </div>
    <div className='container-list'>
        {props.backendData.filter(data=>{
            if(data.nome!==undefined){
              if(searchEmail===''&&searchNome===''){
                return data
              }
              else if(data.email.toLowerCase().includes(searchEmail.toLowerCase())){
                return data
              }
            }
          }).filter(
            data=>{
              if(data.nome!==undefined){
            
                if(searchEmail===''&&searchNome===''){
                  return data
                }
                
                else if(data.nome.toLowerCase().includes(searchNome.toLowerCase())){
                  return data
                }
              }
            }).reverse().map((data,index,array)=>{
            if(index<10){
              return(
                <div key={data._id} className='list-container'> 
                  <ul className='whole-list'>
                    <li className='individual-list'>Nome: {data.nome}</li>
                    <li className='individual-list'>CPF: {data.cpf}</li>
                    <li className='individual-list'>Celular: {data.celular}</li>
                    <li className='individual-list'>Email: {data.email}</li>
                    <li className='individual-list'>Endereco: {data.endereco}</li>
                    <li className='individual-list'>Nascimento: {data.nascimento}</li>
                  
                    <div className='button-container'>
                    <Link to={{
                            pathname: `/search/${data._id}`,
                            state: {
                                id: data._id,
                                nome:data.nome,
                                cpf:data.cpf,
                                endereco:data.endereco,
                                nascimento:data.nascimento,
                                observacao:data.observacao,
                                celular:data.celular,
                                email:data.email,
                            }}}>
                             
                            
                              <li className='Editar-button'>Editar</li>  </Link>  
                              <p className='deletar' id={data._id} onClick={deletar}>Deletar</p>  
                              </div>
                                     
                   </ul>
                </div>
              )
            }
            
           
          })
         
          }
           </div>
              </div>
                );
             
      
   
}




export default Search