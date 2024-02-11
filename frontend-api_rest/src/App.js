import React from 'react';
import { Router }  from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import history from './services/history';
// Importando estilo global da aplicação.
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
// Importando rotas que serão renderizadas na tela.
import Routes from './routes/'


function App() {// Router substituiu browserRouter.

  // Toast Container é um método toastify que renderiza mensagens ao usuario, autoClose define o tempo que essas mensagens ficarão na tela.
  return ( 
    <Router history={history}>
      <Header/>
      <Routes/>
      <GlobalStyle/>
      <ToastContainer autoClose={3000} className="toast-container"/>
    </Router>  
  );
  // Depois disso só precisamos importar o css do toasrContianer pode ser junto ao GlobalStyles.
  
};

export default App;
