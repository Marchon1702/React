import Colaborador from '../Colaborador'
import './Times.css'

const Times = (props) => {
    // Fazendo um renderização condicional.
    // Pode ser feito com opções ternarias ou com condicional de "curto circuito": condição &&
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={ { backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderBottomColor: props.corPrimaria }}>
                {props.nome}
            </h3>
            <div class="colaboradores">
                {props.colaboradores.map( colaborador => <Colaborador
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.corDeFundo}
                />)}
            </div>
        </section> : ''
    )
}

export default Times