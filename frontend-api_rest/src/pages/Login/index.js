import React from 'react';

// Importando container para ser um main global da minh aplicação.
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

export default function Login() {
    // UseEffect substitui funções como componentsDidMount etc..
    // Se criamos dessa forma o bloco da função anonima só será executado uma fez quando a pagina atualizar. o Array vazio significa que poderiamos botar variaveis de estado e quando esse estado muda o bloco anonimo executa.
    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('http://localhost:3000')
            console.log(response)
        }

        getData()
    }, []);
    return(
        <Container>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo> Lorem inpsum dolor amet. </Paragrafo>
            <button type='button'>Enviar</button>
        </Container>        
    );
}

