import {Link} from 'react-router-dom'
import { Navbar,Nav,Container} from 'react-bootstrap';


const Navs = (props) => {
    return ( 

<Navbar style={{marginBottom:"20px"}} bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Clientes do meu app</Navbar.Brand>
    <Nav className="me-auto">
    <Link to="/Registrar-Clientes">  <Nav.Link href="#home">Home</Nav.Link></Link>
    <Link to="/search"> <Nav.Link href="#features">Search</Nav.Link> </Link>
    </Nav>
    </Container>
  </Navbar>

           
    )
}
export default Navs