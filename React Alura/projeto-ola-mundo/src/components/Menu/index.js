import styles from './Menu.module.css'
import LinkMenu from '../LinkMenu'

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <LinkMenu to="/">
                    Inicio
                </LinkMenu>
                <LinkMenu to="/sobremim">
                    Sobre Mim
                </LinkMenu>
            </nav>
        </header>
    )
}

export default Menu