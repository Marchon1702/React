import styles from './Card.module.css';
import favoritar from '../../assets/images/favoritar_outline.png';

const Card = ({ id, titulo, capa }) => {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2> { titulo } </h2>
            <img 
                src={favoritar}
                alt="Favoritar item" 
                className={styles.favoritar}
            />
        </div>
    )
}

export default Card