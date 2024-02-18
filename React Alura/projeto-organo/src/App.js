// Single Page Application: são diversas funcionalidades que acontecem em uma tela só, sem ter q recarregar a pagina, bem paraecido com um app de celular.

import { useState } from 'react';
import { Banner } from './components/Banner';
import { Formulario } from './components/Form';
import Times from './components/Times';
import Footer from './components/Footer';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FE8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const adicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    // label e placeholder está sendo usado como argumento para o parametro props no componente text-area.

    // Em react as funções são chamadas em props e "programadas" no elemento.
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => adicionado(colaborador)}
        times={times.map(time => time.nome)}
      />
      {times.map(time => <Times
        key={time.nome}
        nome={time.nome}
        corSecundaria={time.corSecundaria} corPrimaria={time.corPrimaria}
        corDeFundo={time.corPrimaria}
        colaboradores={colaboradores.filter( colaborador => colaborador.time === time.nome)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
