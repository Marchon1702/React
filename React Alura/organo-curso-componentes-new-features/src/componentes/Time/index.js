import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'
import './Time.css'

const Time = ({ nomeTime, id, cor, colaboradores, aoDeletar, mudaCor, aoFavoritar }) => {
    const css = { backgroundColor: hexToRgba(cor, '0.6') }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <input type='color' value={cor} onChange={e => mudaCor(e.target.value, id)} className='input-color' />
            <h3 style={{ borderColor: cor }}>{nomeTime}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador
                    corDeFundo={cor}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    id={colaborador.id}
                    favorito={colaborador.favorito}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    aoDeletar={aoDeletar}
                    aoFavoritar={aoFavoritar}
                />
                )}
            </div>
        </section>
            : ''
    )
}

export default Time