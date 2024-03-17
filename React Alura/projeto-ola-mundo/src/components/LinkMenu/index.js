import { Link, useLocation } from 'react-router-dom'
// Uma boa forma de prevenir nomes duplicados em classes ou importações mais globais é usando o css com modules, pois ele importa somente o css para o componente especifico, prevenindo de nomes de classes iguais gerarem conflitos.
import styles from '../Menu/Menu.module.css'

const LinkMenu = ({ children, to }) => {
    const location = useLocation()

    return (
        <Link className={`${styles.link}
                ${location.pathname === to ? styles.linkDestacado : ''}
                `
        } to={to}>
            {children}
        </Link>
    )
}

export default LinkMenu