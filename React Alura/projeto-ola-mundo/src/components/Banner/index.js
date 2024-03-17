import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boa Vindas ao meu espaó pessoal! Eu sou Ântonio Evaldo, instrutor de Front-End da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt='Circulo Colorido'
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Ântonio Evaldo'
                />
            </div>
        </div>
    )
}

export default Banner