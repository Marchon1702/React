import styles from './Footer.module.css'
// Importando arquivo SVG como componente...
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'
// A sintaxe import { ReactComponent as NomeDoComponente } from 'caminho_do_componente'; é possível devido ao pacote SVGR, que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.

const Footer = () => {
    // É uma boa pratica importarmos SVG como componentes então fizemos isso.
    return (
        <div className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Alura
        </div>
    )
}

export default Footer