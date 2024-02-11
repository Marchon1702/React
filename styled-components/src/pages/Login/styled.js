// Importando styled após instala-lo pelo npm.
import styled from 'styled-components';

// Com styled components importamos os "css" de forma diferente.
// Todas as variaveis de estilo tem q ser maiusculas.
export const Title = styled.h1 `
   //Adicionando script em regras de "css" 
   color: ${props => props.isRed ? 'red': 'blue'};
   // Obs: quando declarando uma propriedade em index ela é considerada true então colocar isRed={true} é redundante.

   //Configurando outros elementos dentro de h1.
   small{
    font-size: 2em;
    margin-left: 20px;
    color: green;
   }
   // Obs tudo que for filho da div representada por title deve ser chamada dentro dela.
`

export const Paragrafo = styled.p``