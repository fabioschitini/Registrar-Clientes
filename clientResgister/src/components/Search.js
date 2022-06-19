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
    <form class="d-flex" role="search">
        <input style={{marginTop:"10px"}} onChange={e=>setSearchNome(e.target.value)} class="form-control me-2" type="search" placeholder="Procurar pelo nome" aria-label="Search"/>
        <input style={{marginTop:"10px"}}  onChange={e=>setSearchEmail(e.target.value)} class="form-control me-2" type="search" placeholder="Procurar pelo email" aria-label="Search"/>
        
      </form>
      


    <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
                <div>
              
             <div class="col">
               <div class="card shadow-sm">
     
                 <div style={{padding:"20px"}} class="card-body">
                   <p  class="card-text">Nome:{data.nome}<br/>CPF:{data.cpf}<br/>Celular:{data.cpf}<br/>Email:{data.email}<br/>Endereco:{data.endereco}<br/>Nascimento{data.nascimento}<br/></p>
                   <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                     <Link to={{
                            pathname: `/Registrar-Clientes/search/${data._id}`,
                            state: {
                                id: data._id,
                                nome:data.nome,
                                cpf:data.cpf,
                                endereco:data.endereco,
                                nascimento:data.nascimento,
                                observacao:data.observacao,
                                celular:data.celular,
                                email:data.email,
                            }}}>  <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button></Link>
                       <button id={data._id} onClick={deletar} type="button" class="btn btn-sm btn-outline-secondary">Deletar</button>
                     </div>
                     <small class="text-muted">9 mins</small>
                   </div>
                 </div>
               </div>
             </div>
     </div>
     
              
              )
            }
            
           
          })
         
          }
           </div>
</div>
</div>






            
           </div>);
             
      
   
}




export default Search