import { Link } from "react-router-dom";
import Styles from './styles/header.module.css'

function Header() {
    return (
        <nav className={Styles.Header} >
            <h1 className={Styles.titulo}><Link to="/">Pagina Inicial</Link></h1>
            <ul className={Styles.lista}>
                <l1 className={Styles.item}><Link to="/adicionar">Adicionar</Link></l1>
                <l1 className={Styles.item}><Link to="/roupas">Roupas</Link></l1>
                <li className={Styles.item}><Link to="/acessorios">Acessorios</Link></li>
                <l1 className={Styles.item}><Link to="bonequinhos">Action figures</Link></l1>
            </ul>
        </nav>
    )
}

export default Header;