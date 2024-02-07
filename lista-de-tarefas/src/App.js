// Começando uma aplicação React.

// Sempre que formos começar uma aplicação React devemos importa-lo mesmo que n usemos ele diretamente, pois usaremos JSX(Arquivo React)

import React from 'react';

import Main from './components/Main';

// Junto com a tradução de arquivos JSX tambem é traduzido o css. Basta importarmos o arquivo CSS aqui.
import './App.css'; // App.css é um par com o App.js.

// Nãp podemos esquecer de exportar a função App para renderizar na tela.
export default function App() {
  // Isto é um componente React. No código fonte está sendo parecido com o HTML, mas este código passa pelo o webpack que traduz pro navegador em JavaScript.
  // Component sem estado.
  return <Main/> // retornando componentes de estado na de Components/ MainC
}
