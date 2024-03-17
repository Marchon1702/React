import React from 'react';
import styled from "styled-components"
import CampoTexto from '../CampoTexto';

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 60px 0px;

    img {
        width: 212px;
        margin-left: 16px;
    }

`

const Header = () => {
    return (
        <HeaderStyle>
            <img src="/imagens/logo.png" alt="logo"/>
            <CampoTexto/>
        </HeaderStyle>
    )
}

export default Header