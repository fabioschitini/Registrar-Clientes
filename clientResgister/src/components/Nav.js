import {Link} from 'react-router-dom'



const Nav = (props) => {
    return (
        <nav>     
                <ul className='nav-list'>  
                    <Link to="/Registrar-Clientes"> <li className='nav-element'>Homepage</li></Link>
            <Link to="/search"><li className='nav-element'>Search</li></Link>
                        </ul>
                
           
        </nav>
    )
}
export default Nav