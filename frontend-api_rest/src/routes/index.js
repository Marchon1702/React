// Criando Rotas no frontEnd com React Router Dom.

import React from 'react';

// Importando handles de rota. (Aqui tinha um Route)
import { Switch } from 'react-router-dom';

// Importando o Toast para emitir mensagens.
//import { toast } from 'react-toastify' // Podemos lançar mensagens Toast da onde nós quisermos basta importa-las e adicionar

import MyRoute from './myRoute';
import Login from '../pages/Login/';
import Page404 from '../pages/Page404';

// Criando função para rotas.

export default function Routes() {
    //toast.error('Deu ruim familia')
    //toast.success('Deu bom familia')
    // temos outros campos de mensagens como mensagens de warning

    return(
        // Switch: Uma funcionalidade que sinaliza pro servidor para abrir apenas uma rota por vez.

        // Route define onde será renderizado determinado componente, Route path = caminho de rota componet = componente que será renderizado. (exact diz que o componente será renderizado extamente na rota descrita, caso não coloquemos ele irá renderizar em qualquer rota que tenha neste caso '/').

        // Criamos um arquivo que substitui o Route para criar rotas chamado MyRoute, a diferença é que MyRoute possui uma função que verifica se a rota é aberta ou fechada e acessada apenas para usuarios logados.
            <Switch>
                <MyRoute exact path="/" component={Login} isClosed />
                <MyRoute path="*" component={Page404}/>
            </Switch>
    )
}