import '../../styles/Navbar.css'
import logoFutebol from '../../../public/assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faUser, faShoppingCart, faShirt } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logoFutebol} alt="" className='logo' />
            <ul className='url'>
                <li>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} /> Usuario
                    </Link>
                </li>
                <li>
                    <Link to="/">
                         <FontAwesomeIcon icon={faShirt} /> Compras
                    </Link>
                </li>
                <li>
                    <Link to="/">
                         <FontAwesomeIcon icon={faShoppingCart} /> Carrinho  
                    </Link>    
                </li>
            </ul>
        </nav>
    )
}