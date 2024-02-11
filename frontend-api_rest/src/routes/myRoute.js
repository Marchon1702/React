// Este arquivo foi criado para redirecionar rotas privadas caso o usuario não esteja logado e deixar em como criterio que caso o usuario seja logado depois do redirecionamento, ele seja automaticamente levado para a pagina que desejava antes de logar.

import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

// Nosso component redirecionador recebe como parametro o componente que esta sendo acessado, uma função criada por nós como forma de validação se o user esta logado ou n e o resto. 
export default function MyRoute({ component: Component, isClosed, ...rest }) {
    const isLoggedIn = false;

    if( isClosed && !isLoggedIn) {
        return (
            <Redirect to={{ pathname: '/login', state: { prevPath: rest.location.pathname}}}
            />
        )
        //Se isClosed(se é uma rota fechada) e !isLoggedIn(se o user n esta logado) return (
        //  Redirecione para { pathname == caminho direto de redirecionamento,
        // state: prevPath == caminho anterior que o usuario tentou acessar. res.location.pathname localiza esse caminho anterior }
        //)
    }

    // Se o user estiver logado ou a rota n for fechada, leve-o para a rota desejada.
    return <Route {...rest} component={Component}/>
}

// Como todas as rotas por padrão são abertas então isClosed normalmente será falso.
MyRoute.defaultProps = {
    isClosed: false
}

// Validando components com propTypes
MyRoute.propTypes = {
    // Neste caso component da função MyRoute pode ser mais de um tipo (elemento ou função) então ele deve ser validado com duas possibilidades adicionadas a um array.
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    // Definido isClosed como valor boleano. Como ele n é required ele deve receber um valor padrão.
    isClosed: PropTypes.bool
}



