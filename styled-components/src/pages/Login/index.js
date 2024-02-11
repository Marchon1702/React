import React from 'react';

// Importando container para ser um main global da minh aplicação.
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
    return(
        <Container>
            <Title isRed={false}>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo> Lorem inpsum dolor amet. </Paragrafo>
            <a href='#'>Xablau</a>
        </Container>        
    );
}

