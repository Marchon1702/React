import './Form.css'
import { TextArea } from '../TextArea'
import ListaSuspensa from '../ListaSuspensa'
import Button from '../Button'
import { useState } from 'react'

export const Formulario = (props) => {

    // Declarando state de variaveis no form para que estas varivaveis sejam setadas ao digitar.    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Chamando a função no props
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    // aoAlterado foi criado aqui e chamado em TextArea quando o input sofre alguma alteração, aoAlterado seta um valor para para a variavel correspondente (nome,cargo ou imagem) e o atributo valor do input recebe o dado de (nome, cargou ou imagem).

    return (
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextArea
                    label="Nome"
                    obrigatorio={true}
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <TextArea 
                    label="Cargo"
                    obrigatorio={true}
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextArea 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label={"Times"} 
                    itens={props.times}
                    valor={time}
                    aoAlterado={ valor => setTime(valor)} 
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
    // Passando props.parametroQualquer q no caso acima um deles é o label, podemos setar o valor desse parametro aqui na hora de importar o component.
    // Uma outra forma de passar parametro para um componente criado é através props.children na função do componente, quando escrevemos o children podemos abrir a tag do componente e adicionar o filho q quisermos dentro dele.
}