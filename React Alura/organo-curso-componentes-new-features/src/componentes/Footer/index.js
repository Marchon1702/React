import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contatos'>
                <img src="/imagens/fb.png" alt="facebook icon"/>
                <img src="/imagens/tw.png" alt="twitter icon"/>
                <img src="/imagens/ig.png" alt="instagram icon"/>
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png" alt="logo Organo" />
            </div>
            <div className='direitos'>
                <h4>Desenvolvido por Alura</h4>
            </div>
        </footer>
    )
}

export default Footer