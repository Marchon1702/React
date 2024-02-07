import React from 'react';
import ReactDOM from 'react-dom/client';
// Imprtando o app de App.js
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // Renderizando o App.js no navegador.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
