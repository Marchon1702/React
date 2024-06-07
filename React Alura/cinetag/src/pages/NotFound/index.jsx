import Titulo from '../../components/Titulo';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <section className={styles.notFound}>
            <Titulo>
                <h1>Ops!</h1>
            </Titulo>
            <p>Está pagina não foi encontrada...</p>
        </section>
    )
}

export default NotFound