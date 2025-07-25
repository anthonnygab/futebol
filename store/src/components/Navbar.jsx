import '../styles/Navbar.css'
import logoFutebol from '../../public/assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faShirt } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logoFutebol} alt="" className='logo' />
            <ul className='url'>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faUser} /> Usuario
                    </a>
                </li>
                <li>
                    <a href="/produtos">
                         <FontAwesomeIcon icon={faShirt} /> Compras
                    </a>
                </li>
                <li>
                    <a href="">
                         <FontAwesomeIcon icon={faShoppingCart} /> Carrinho  
                    </a>    
                </li>
            </ul>
        </nav>
    )
}