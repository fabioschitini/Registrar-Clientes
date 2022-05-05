import { useState,useEffect } from 'react'
import Axios from 'axios'
import {useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Editar = (props) => {
  const navigate = useNavigate();
   // const [editInfo,setEditInfo]=useState()
  const { id } = useParams()  
  //console.log(id)
  //console.log(props.backendData.filter(user=>user._id===id))
    const [nome,setNome]=useState('')
    const [cpf,setCpf]=useState('')
    const [endereco,setEndereco]=useState('')
    const [celular,setCelular]=useState('')
    const [nascimento,setNascimento]=useState('')
    const [email,setEmail]=useState('')
    const [observacao,setObservacao]=useState('')
    const [inputData,setInputData]=useState([])

  
     function onSubmit(e){
      e.preventDefault()
     Axios.post(`https://tranquil-shelf-46464.herokuapp.com/users/editar`,{email,cpf,nome,endereco,observacao,celular,nascimento,id})
     navigate("/search")
      console.log(`dado foi submited`)
    }

  useEffect(()=>{
    if(props.backendData[0].nome){
      setInputData(props.backendData.filter(data=>data._id===id))
      setNome(props.backendData.filter(data=>data._id===id)[0].nome)
      setEmail(props.backendData.filter(data=>data._id===id)[0].email)
      setCelular(props.backendData.filter(data=>data._id===id)[0].celular)
      setCpf(props.backendData.filter(data=>data._id===id)[0].cpf)
      setObservacao(props.backendData.filter(data=>data._id===id)[0].observacao)
      setNascimento(props.backendData.filter(data=>data._id===id)[0].nascimento)
      setEndereco(props.backendData.filter(data=>data._id===id)[0].endereco)
    }
  },[props.backendData])
  //coloquei cpf como read only no update pois achei que o cpf deveria ser ineditavel e unico 
  // para cada cliente
    return (
        <div>
          <header className='speaker-form-header'>
      <h1>Edicao da informacao do cliente </h1>
      <p><em>Local em que voce pode editar as informacoes dos clientes</em></p>
    </header>
{inputData[0]!==undefined?

<form className='speaker-form' onSubmit={onSubmit}>
<div className='form-row'>
        <label forHtml='nome'>Name</label>
        <input id='nome' placeholder='Tony Stark' required value={nome} type='text' onChange={(e) => setNome(e.target.value.replace(/[^\w\s]/gi, ""))}/>
      </div>
      <div className='form-row'>
        <label forHtml='email'>Email</label>
        <input id='email' placeholder='euSouGroot@gmail.com' required value={email} type='email' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='form-row'>
        <label forHtml='nascimento'>Nascimento</label>
        <input id='nascimento' placeholder='09/09/2000' required value={nascimento}  type='text' onChange={(e) => setNascimento(e.target.value)}/>
      </div>
      <div className='form-row'>
        <label forHtml='celular'>Celular</label>
        <input id='celular' placeholder='(75) 9 9876 9456' required value={celular} type='text' onChange={(e) => setCelular(e.target.value)}/>
      </div>
      <div className='form-row'>
        <label forHtml='endereco'>Endereco</label>
        <input id='endereco' placeholder='Endereço'  required value={endereco} type='text' onChange={(e) => setEndereco(e.target.value)}/>
      </div>
      <div className='form-row'>
        <label  forHtml='cpf'>CPF</label>
        <input readonly="readonly"  placeholder='12345678912' id="cpf" required value={cpf}  type='number' onChange={(e) => setCpf(e.target.value)}/>
      </div>
<div className='form-row'>
<label forHtml='Observacao'>Observacao</label>
<textarea id='observacao' placeholder='Observacao... '  value={observacao} max='300' type='text' onChange={(e) => setObservacao(e.target.value)}/>
<div className='instructions'>Coloque alguma observacao se assim desejar</div>
</div>
<div className='form-row'>
        <button>Submit</button>
      </div>
</form>
    
    
    :null}
    
   

</div>
      );
   
}

export default Editar 