import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Outfit", sans-serif;
    }
`

export const Main = styled.main`
    display: grid;
    place-items: center;
    min-height: 100vh;
    background-color: #d6e2f0;
`

export default GlobalStyles