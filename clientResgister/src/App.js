import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import Navs from './components/Nav'
import Search from './components/Search'
//import Cliente from './components/Cliente'
import Editar from './components/Editar'
import './App.css';




function App() {
  //const [clinete,setCliente]=useState({})
  const [loading,setLoading]=useState(true)
  const [backendData,setBackendData]=useState([{}])


  useEffect(()=>{
fetch("https://tranquil-shelf-46464.herokuapp.com/users").then(response=>response.json()).then(data=>setBackendData(data))

  },[])


  
 

  return (
    <div className="App">
   <Router>
        <Navs> </Navs>
        <Routes>
        <Route path='/Registrar-Clientes/' element={<Home backendData={backendData} setBackendData={setBackendData}/>} />
        <Route exact path='/Registrar-Clientes/search' element={<Search backendData={backendData} setBackendData={setBackendData}/>} />
        <Route path='/Registrar-Clientes/search/:id' element={<Editar backendData={backendData} setBackendData={setBackendData}/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;