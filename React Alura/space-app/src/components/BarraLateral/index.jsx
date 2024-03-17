import React from 'react';
import styled from 'styled-components';
import ItemNavegacao from './ItemNavegacao';

const BarraLateralStyle = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <BarraLateralStyle>
                   <ItemNavegacao
                    iconeAtivo="/icones/home-ativo.png"
                    iconeInativo="/icones/home-inativo.png"
                    ativo={true}
                   >
                    Home
                   </ItemNavegacao>
                   <ItemNavegacao
                    iconeAtivo="/icones/mais-vistas-ativo.png"
                    iconeInativo="/icones/mais-vistas-inativo.png"
                   >
                    Mais Vistos
                   </ItemNavegacao>
                   <ItemNavegacao
                    iconeAtivo="/icones/mais-curtidas-ativo.png"
                    iconeInativo="/icones/mais-curtidas-inativo.png"
                   >
                    Mais Curtidos
                   </ItemNavegacao>
                   <ItemNavegacao
                    iconeAtivo="/icones/novas-ativo.png"
                    iconeInativo="/icones/novas-inativo.png"
                   >
                    Novas
                   </ItemNavegacao>
                   <ItemNavegacao
                    iconeAtivo="/icones/surpreenda-me-ativo.png"
                    iconeInativo="/icones/surpreenda-me-inativo.png"
                   >
                    Surpreenda-me
                   </ItemNavegacao>
                </BarraLateralStyle>
            </nav>
        </aside>
    )
} 

export default BarraLateral