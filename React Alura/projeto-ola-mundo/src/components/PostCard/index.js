import styles from './Post.module.css'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
    // PostCard quando renderizado sera direcionado para a rota to que está no Link, neste caso a rota que será adicionada a cada componente é refrente ao valor de seus ids no JSON.
    return (
        <Link to={`post/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt='posts'
                />
                <h2 className={styles.titulo}> {post.titulo} </h2>
                <button className={styles.botaoLer}> Ler </button>
            </div>

        </Link>
    )
}

export default PostCard