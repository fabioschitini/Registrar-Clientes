import { useState } from 'react'
import Axios from 'axios'


const Home = (props) => {
 
  
    const [nome,setNome]=useState('')
    const [cpf,setCpf]=useState('')
    const [endereco,setEndereco]=useState('')
    const [celular,setCelular]=useState('')
    const [nascimento,setNascimento]=useState('')
    const [email,setEmail]=useState('')
    const [observacao,setObservacao]=useState('')
    const [cpfValidation,setCpfValidation]=useState('')
    const [errorRepetido,setErrorRepetido]=useState('')

  function onSubmit(e){
    e.preventDefault()
  if(_cpf(cpf)){
  if(props.backendData.filter(data=>data.cpf===cpf)[0]!==undefined){
    
    setErrorRepetido('Esse CPF ja esta em uso, por favor insira outro')
  }
  else{
    Axios.post('https://tranquil-shelf-46464.herokuapp.com/users',{email,cpf,nome,endereco,observacao,celular,nascimento}).then(()=>console.log(`yepp`))
    e.preventDefault()
    console.log(`dado foi submited`)
    setCpfValidation('')
    setErrorRepetido('')
    setNome('')
    setEmail('')
    setCelular('')
    setCpf('')
    setObservacao('')
    setNascimento('')
    setEndereco('')
  }
  }
 else if(!_cpf(cpf)){
    setCpfValidation('Esse CPF  é invalido, por favor use outro')
 }
    
  }
  
  function mphone(v) {
    var r = v.target.value.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
   } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    setCelular(r)
  }

 

  function _cpf(cpf) {
    let i
    let add;
    let rev;
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    if (cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999")
    return false;
    add = 0;
    for ( i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
    rev = 0;
    if (rev !== parseInt(cpf.charAt(9)))
    return false;
    add = 0;
    for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
    rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
    return false;
    return true;
    }
    

    return (
        <div>

<header className='speaker-form-header'>
      <h1>Cadastro de Cliente</h1>
      <p><em>Local de cadastro de clientes</em></p>
    </header>

    <form className='speaker-form' onSubmit={onSubmit}>
    <div className='form-row'>
            <label htmlFor='nome'>Name</label>
            <input name='nome' id='nome' placeholder='Tony Stark'  required value={nome} type='text' onChange={(e) => setNome(e.target.value.replace(/[^\w\s]/gi, ""))}/>
          </div>
          <div className='form-row'>
            <label htmlFor='email'>Email</label>
            <input name='email' id='email' placeholder='euSouGroot@gmail.com' required value={email} type='email' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='form-row'>
            <label htmlFor='nascimento'>Nascimento</label>
            <input name='nascimento' id='nascimento' placeholder='09/09/2000' required value={nascimento}  type='date' onChange={(e) => setNascimento(e.target.value)}/>
          </div>
          <div className='form-row'>
            <label htmlFor='celular'>Celular</label>
            <input name='celular' id='celular' placeholder='(75) 9 9876 9456' required value={celular} type='text' onChange={mphone}/>
          </div>
          <div className='form-row'>
            <label htmlFor='endereco'>Endereco</label>
            <input name='endereco' id='endereco'placeholder='Endereço'  required value={endereco} type='text' onChange={(e) => setEndereco(e.target.value)}/>
          </div>
          <div className='form-row'>
            <label  htmlFor='cpf'>CPF</label>
            <input name='cpf' placeholder='123.456.789.01' id="cpf" required value={cpf}  type='text'  max='14'min='14' onChange={e=>setCpf(e.target.value)}/>
          </div>
    <div className='form-row'>
    <label htmlFor='Observacao'>Observacao</label>
    <textarea name='observacao' id='observacao' placeholder='Nome sujo no serasa'  value={observacao} max='300' type='text' onChange={(e) => setObservacao(e.target.value)}/>
    <div className='instructions'>Coloque alguma observacao se assim desejar</div>
  </div>
  <div className='form-row'>
           <p className='warning'>{errorRepetido}</p>
           <p  className='warning'>{cpfValidation}</p>
          </div>
  <div className='form-row'>
            <button>Submit</button>
          </div>
    </form>

</div>
      );
   
}

export default Home 