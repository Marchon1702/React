import styles from './HeaderLink.module.css';
import { Link } from "react-router-dom"

const HeaderLink = ({ src, children }) => {
    return (
        <Link to={src} className={styles.link}>
            {children}
        </Link>
    )
}

export default HeaderLink