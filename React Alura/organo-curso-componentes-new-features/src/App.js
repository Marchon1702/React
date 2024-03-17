import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer'
// uuid cria um id único a cada vez que a aplicação renderiza, isso é mais seguro do que criar um id fixo ou até mesmo sequencial, pois facilitaria a manipulação de dados dos colaboradores caso algum invasor quisesse. 
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador.id)
  }

  const deletarColadorador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }

      return time
    }))
  }

  const criarTime = (novoTime) => {
    setTimes([...times, { ...novoTime }])
  }

  const aoFavoritar = (id) => {
    setColaboradores( colaboradores.map( colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        criarTime={ criarTime }
        times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <section className='times'>
        {times.map(time => <Time
          key={time.nome}
          nomeTime={time.nome}
          id={time.id}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColadorador}
          aoFavoritar={aoFavoritar}
          mudaCor={mudarCorTime}
        />)}
      </section>
      <Footer />
    </div>
  );
}

export default App;
