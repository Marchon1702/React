import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StricMode é um ajudante de depuraçÃo de código ele detecta erros ou possiveis erros que você possa estar cometendo ao digitar seu código.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


