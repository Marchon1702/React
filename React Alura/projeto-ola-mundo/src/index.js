import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Este projeto é uma SPA (Single Page Application), é um modelonde aplicação onde todos as páginas são renderizadas em um único HTML, otimizando o carregamento de páginas e fazendo com que nosso site pareça uma aplicação desktop.

  // Esses projetos são muito comuns de serem usados hoje em dia, porém devemos tomar cuidado com o tipo de aplicação que usaremos isso, pois SPA dificulta a localização do seu site pelo google, fazendo com que ele seja menos rankeado e mais dificil de ser recomendado pelo sistema de busca do google. Sabendo disso, não é muito vantajoso criar SPA para um blog que precisa de mais alcanço.
  
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
