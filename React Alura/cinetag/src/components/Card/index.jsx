import styles from './Card.module.css';
import naoFavorito from '../../assets/images/favoritar_outline.png';
import iconeFavorito from '../../assets/images/favoritar.png';
import { useFavoritoContext } from '../../hooks/useFavoritoContext';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa }) => {
    const {favorito, adicionarFavorito} = useFavoritoContext()
    const ehFavorito = favorito.some( fav => fav.id === id)
    const icone = ehFavorito ? iconeFavorito : naoFavorito
    return (
        <div className={styles.container}>
            <Link to={`/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2> { titulo } </h2>
            </Link>
            <img 
                src={icone}
                alt="Favoritar item" 
                className={styles.favoritar}
                onClick={() => adicionarFavorito({ id, titulo, capa })}
            />
        </div>
    )
}

export default Card