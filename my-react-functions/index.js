// funções React prontas criadas por mim que foram guardadas com intuito de reaproveitamento ou releitura futura a fim de estabalecer uma lógica padrão.

const [carrinho, setCarrinho] = useState([])

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

const { quantidadeTemp, totalTemp } = useMemo(() => {
    return carrinho.reduce((ac, produto) => ({
        quantidadeTemp: ac.quantidadeTemp + produto.quantidade,
        totalTemp: ac.totalTemp + produto.preco * produto.quantidade,
    }),
        {
            quantidadeTemp: 0,
            totalTemp: 0,
        }
    );
}, [carrinho])

useEffect(() => {
    setQuantidade(quantidadeTemp)
    setValorTotal(totalTemp)
})

