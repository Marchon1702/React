// Aqui faremos todos os estilos globais da nossa aplicação.
// Importando função do React para criar uma "Regra global css"
import { createGlobalStyle } from 'styled-components';
// Importando cores do projeto.
import {primaryDarkColor, primaryColor} from '../config/colors'

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
        background: ${primaryDarkColor};
    }

    html, body, #root {
        height: 100%;
    }

    button {
        background-color: ${primaryColor};
        border: none;
        color: #fff;
        border-radius: 4px;
        padding: 10px 20px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: ${primaryColor};
    }

    ul {
        list-style: none;
    }
`
// Estilizando um main global ara todas as paginas.
export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    color: #000;
    margin: 20px auto;
    padding: 20px;
`;