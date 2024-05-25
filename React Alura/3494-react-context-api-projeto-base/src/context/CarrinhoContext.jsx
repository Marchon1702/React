import { createContext, useState } from 'react';
export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([])
    // value é o responsavel por guarda a props do contexto que serão utilizadas em outros componentes. 
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}