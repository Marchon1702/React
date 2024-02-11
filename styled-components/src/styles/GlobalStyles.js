// Aqui faremos todos os estilos globais da nossa aplicação.
// Importando função do React para criar uma "Regra global css"
import { createGlobalStyle } from 'styled-components';

// Importando styled para estilizar um main global.
import styled from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    body {
        background-color: lightgray;
    }

    html, body, #root {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    ul {
        list-style: none;
    }
`
// Estilizando um main global ara todas as paginas.
export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 0 auto;
`;