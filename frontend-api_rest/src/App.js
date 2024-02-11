import React from 'react';
// Importando history antes de tudo aqui.
import history from './services/history';

// Importando rota de login que será renderizada na tela.
import Routes from './routes/'

import { Router }  from 'react-router-dom';
import Header from './components/Header';

// Importando estilo global da aplicação.
import GlobalStyle from './styles/GlobalStyles';

function App() {// Router substituiu browserRouter.
  return ( 
    <Router history={history}>
      <Header/>
      <Routes/>
      <GlobalStyle/>
    </Router>  
  );
};

export default App;
