import React from 'react';
import styled from 'styled-components';

const ItemNavegacaoStyle = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    /* props é um parametro de um atributo recebido do componente em sua declaração. */
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
     /* Para passar uma props para o styled components usamos o $ na frente. */
    return (
        <ItemNavegacaoStyle       
            $ativo={ativo}
        >
            <img src={ ativo ? iconeAtivo : iconeInativo } alt="icones de navegação" />
            {children}
        </ItemNavegacaoStyle>
    )
}

export default ItemNavegacao