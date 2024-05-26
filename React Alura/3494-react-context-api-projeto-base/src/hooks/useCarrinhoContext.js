// Criando um hook customizado para exportar funções de codigos complexos.
import { useContext, useEffect } from "react"
import { CarrinhoContext } from "../context/CarrinhoContext"

// Aqui ficará todas as funções relacionadas ao carrinho, após importar o CarrinhoContext nós podemos manipular essa variavel de diversas formas através de funções.
export const useCarrinhoContext = () => {
  const { carrinho,
    setCarrinho,
    quantidade,
    setQuantidade,
    valorTotal,
    setValorTotal
  } = useContext(CarrinhoContext)

  function adicionarProduto(novoProduto) {
    // verificando se tem o produto ja adicionado no carrinho adicionando ele a uma constante chamada temOProduto. Caso não tenha essa variavel retornará um valor falso.
    const temOProduto = carrinho.some((itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id)

    // Caso temOProduto retornar falso, a função irá adicionar o novoProduto ao carrinho.
    if (!temOProduto) {
      novoProduto.quantidade = 1
      //carrinhoAnterior é um paramtero que representa o estado anterior a o set que está sendo feito aqui.
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto
      ]
      )
    } else {
      // Caso ja exista o produto verfique em cada vetor de carrinhoAnterior e quando achar um id compativel adicione +1 a quantidade dele.
      setCarrinho((carrinhoAnterior) => carrinhoAnterior.map(itemDoCarrinho => {
        if (itemDoCarrinho.id === novoProduto.id) {
          return {
            ...itemDoCarrinho,
            quantidade: itemDoCarrinho.quantidade + 1
          }
        }
        return itemDoCarrinho;
      }))
    }
  }

  function removerProduto(id) {
    const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id)
    const ehOUltimo = produto.quantidade === 1

    if (ehOUltimo) {
      return setCarrinho((carrinhoAnterior) => carrinhoAnterior.filter(produto => produto.id !== id))
    }

    setCarrinho((carrinhoAnterior) => carrinhoAnterior.map(itemDoCarrinho => {
      if (itemDoCarrinho.id === id) {
        return {
          ...itemDoCarrinho,
          quantidade: itemDoCarrinho.quantidade - 1
        };
      }
      return itemDoCarrinho;
    }))
  }

  function removerProdutoCarrinho(id) {
    const produto = carrinho.filter(itemDoCarrinho => itemDoCarrinho.id !== id)
    setCarrinho(produto)
  }

  useEffect(() => {
    const { quantidadeTemp, totalTemp } = carrinho.reduce((ac, produto) => ({
      quantidadeTemp: ac.quantidadeTemp + produto.quantidade,
      totalTemp: ac.totalTemp + produto.preco * produto.quantidade,
    }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
    );
    setQuantidade(quantidadeTemp)
    setValorTotal(totalTemp)
  }, [carrinho])



  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade
  }
}