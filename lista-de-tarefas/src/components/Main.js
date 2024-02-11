import React, {Component} from 'react';

// Criando Css para meu componente.
import './Main.css'

// Importando componente do form.
import Form from './Form'

//Importando o componente de Tarefas.
import Tarefas from './Tarefas'

// Components com estado (statefull)
export default class Main extends Component {
  // Estes componente com estado precisam de um método para serem renderizados na tela.

// Criando estados
  state = { // Declarando estado de um atributo.
    novaTarefa: '',
    tarefas: [],
    index: -1
  }

  // Método que executa a cada vez que o componente react for montado.
  componentDidMount() {
    // Tarefas recebe JSON do localStorage na sessão 'tarefas'.
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    if(!tarefas) return

    this.setState({
      tarefas: tarefas
    })
  }

    // Método que define um acontecimento quando ocorre qualquer atualização na tela.
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state
    // Se tarefas(atuais) forem igual tarefas(status anteriores).
    if(tarefas === prevState.tarefas) return

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Capturando atributos do state.
    const { tarefas, index } = this.state
    let { novaTarefa } = this.state
    // Neste caso é string
    novaTarefa = novaTarefa.trim()

    if(tarefas.indexOf(novaTarefa) !== -1) return

    // Não podemos editar o estado diretamente, então estamos copiando ele para um array separado. A menos que sejam strings.
    const antigasTarefas = [...tarefas]

    if(index === -1) {
      // Setamos o State quando quisermos mudar o valor dos atributos dessa class.
      this.setState ({
        tarefas: [...antigasTarefas, novaTarefa],
        novaTarefa: ''
      })
    } else {
      antigasTarefas[index] = novaTarefa

      this.setState({
        tarefas: [...antigasTarefas],
        index: -1
      })
    }


    const input = document.querySelector('input')
    input.focus()
  }

  // Sempre q usarmos um evento de função em HTML o nome do metodo será handle(evento)
  handleChange = (e) => {
    this.setState({ // setando estado em um método
      novaTarefa: e.target.value
    })
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state
    this.setState({
      index: index,
      novaTarefa: tarefas[index]
    })
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state
    const antigasTarefas = [...tarefas]

    antigasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...antigasTarefas]
    })
  }

  render() {
    // "Importando variavel do método handleChange"
    const { novaTarefa, tarefas } = this.state

    return (
      // Tudo que for escrito em JS puro aqui deve ser posto entre parenteses.
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    )
  }
}
