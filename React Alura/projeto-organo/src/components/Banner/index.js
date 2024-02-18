// Criando um componente React (Banner)

// Importando css 
import './Banner.css'

export const Banner = () => {
    // Arquivo JSX (Lê oque foi escrito em uma estrutura de HTML e converte para JavaScript criando elementos baseado no "HTML "digitado.)
    return(
        <header className='banner'>
           <img src="/imagens/banner.png" alt="O banner pricinpial do site."/> 
        </header>
        
    )
}

