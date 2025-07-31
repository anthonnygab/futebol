import '../styles/Navbar.css'
import logoFutebol from '../../public/assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faShirt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logoFutebol} alt="" className='logo' />
            <ul className='url'>
                <li>
                    <Link to="/user">
                        <FontAwesomeIcon icon={faUser} /> Usuario
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                         <FontAwesomeIcon icon={faShirt} /> Compras
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                         <FontAwesomeIcon icon={faShoppingCart} /> Carrinho  
                    </Link>    
                </li>
            </ul>
        </nav>
    )
}