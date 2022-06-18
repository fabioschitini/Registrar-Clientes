import {Link} from 'react-router-dom'
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';


const Navs = (props) => {
    return ( 

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to="/Registrar-Clientes">  <Nav.Link href="#home">Home</Nav.Link></Link>
    <Link to="/Registrar-Clientes/search"> <Nav.Link href="#features">Search</Nav.Link> </Link>
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>

           
    )
}
export default Navs