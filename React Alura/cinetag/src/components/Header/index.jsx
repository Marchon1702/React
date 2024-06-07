import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import HeaderLink from '../HeaderLink'
import logo from '/imagens/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="logo do cineTag" />
            </Link>
            <nav>
                <HeaderLink src='/'>
                    Home
                </HeaderLink>
                <HeaderLink src='/favoritos'>
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header