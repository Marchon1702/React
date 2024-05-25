import React, { useContext } from "react";
import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { CarrinhoContext } from '@/context/CarrinhoContext';

const Produtos = () => {
  const {carrinho, setCarrinho} = useContext(CarrinhoContext)

  function adicionarProduto(novoProduto)  {
    // verificando se tem o produto ja adicionado no carrinho adicionando ele a uma constante chamada temOProduto. Caso não tenha essa variavel retornará um valor falso.
    const temOProduto = carrinho.some((itemDoCarrinho) => novoProduto.id === itemDoCarrinho.id)

    // Caso temOProduto retornar falso, a função irá adicionar o novoProduto ao carrinho.
    if(!temOProduto) {
      novoProduto.quantidade = 1
      //carrinhoAnterior é um paramtero que representa o estado anterior a o set que está sendo feito aqui.
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto
      ]
    )}

    // Caso ja exista o produto verfique em cada vetor de carrinhoAnterior e quando achar um id compativel adicione +1 a quantidade dele.
    setCarrinho(carrinhoAnterior.map(itemDoCarrinho => {
      if(itemDoCarrinho.id === novoProduto.id) {
        return itemDoCarrinho.quantidade =+ 1
      }
    }))
  }
  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
