import './Campo.css'

const Campo = ({ type = 'text', valor, placeholder, aoAlterado, label, obrigatorio}) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                value={valor}
                type={type}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo