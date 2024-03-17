import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid'

const Formulario = (props) => {

    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [favorito, setFavorito] = useState(false)
    const [novoTime, setnovoTime] = useState('')
    const [corNovoTime, setcorNovoTime] = useState('#000')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            id,
            nome,
            cargo,
            imagem,
            time,
            favorito
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => {
                        setId(uuidv4())
                        setNome(valor)
                    }
                    }
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={ (e) => {
                e.preventDefault()
                props.criarTime({ nome: novoTime, cor: corNovoTime, id: uuidv4()})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Nome do time..."
                    valor={novoTime}
                    aoAlterado={valor => {
                        setId(uuidv4())
                        setnovoTime(valor)
                    }
                    }
                />
                <Campo
                    obrigatorio={true}
                    label="Cor"
                    type="color"
                    placeholder="Digite a cor do time..."
                    valor={corNovoTime}
                    aoAlterado={valor => setcorNovoTime(valor)}
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario