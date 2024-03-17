import styled from "styled-components";

const Titulo = styled.h2`
    color: #7B78E5;
    font-size: 32px;
    // Alinhamento do titulo recebe a props $alinhamento, se ele for declarada, ela recebe o valor declarado, caso contrario recebe 'left'.
    align-items: ${ props => props.$alinhamento ? props.$alinhamento : 'left'};
;
`

export default Titulo