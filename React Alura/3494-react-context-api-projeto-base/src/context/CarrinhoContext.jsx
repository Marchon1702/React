import { createContext, useState } from "react";
export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "CarrinhoContext";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  // value é o responsavel por guardar a props do contexto que serão utilizadas em outros componentes.
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidade,
        setQuantidade,
        valorTotal,
        setValorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
