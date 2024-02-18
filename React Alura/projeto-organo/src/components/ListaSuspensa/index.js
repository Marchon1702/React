import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // Iterando em cima de um elemento para que ele seja reproduzido na tela a cada adição.
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={ e => props.aoAlterado(e.target.value)}>
                <option value={''}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

    // props.aoALterado esta sendo chamado com o argumento que é o value do select, ou seja quando houver alguma mudança no select chame aoAlterado quem no atributo do form seta o valor de time, que é adicionado ao props.valor que é igual ao value de select.
}

export default ListaSuspensa