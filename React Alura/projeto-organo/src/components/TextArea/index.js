import './TextArea.css'

// O modo padrão em um ambiente profissional para importação de componentes é feito da seguinte forma:

export const TextArea = (props) => {
    // Usando o Hook userState para controlar o estado de valor
    // Capturando value de inputs com React 
    const aoDigitado = (e) => {
        // A função aoAlterado esta sendo chamada aqui com o argumento do valor digitado no input, que muda a cada vez que este input sofre alguma alteração. Em resumo quando o input é modificado aoAlterado é chamado setando um novo estado para a variavel que armazena este valor.
        props.aoAlterado(e.target.value)
        // Quando chamarmos uma função no props esta função pode ser escrita diretamente no input que será setado.
    }

    return (
        // props.label é um parametro aberto que pode ser argumentado na hora que essa função for chamada.
        <div className="text-area">
            <label>
                {props.label}
            </label>
            <input onChange={ aoDigitado } value={props.valor} type="text" required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
        //Sobre capturar o value de um input: Agr adicionamos o value com a variavel que recebe a digitação.
    )
}



