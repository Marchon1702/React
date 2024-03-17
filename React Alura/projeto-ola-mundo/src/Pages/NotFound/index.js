import { useNavigate, useNavige } from 'react-router-dom'
import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'

const NotFound = () => {

    // Usenavigate retorna uma função de navegação onde seus parametros podem ser o nome da rotas em strings ou um numero ex: -1 que se refere ao historico de páginas acessadas, -1 significa que vc qyer q o usuario volta a página(rota) anterior que ele estava acessando.
    const navigation = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navigation(-1)}
                >
                    <button>Voltar</button>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='cachorro de óculos'
                />
            </div>
            <div className={styles.espacoEmBranco}>

            </div>
        </>

    )
}

export default NotFound