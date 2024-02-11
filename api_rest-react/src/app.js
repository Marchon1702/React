import { resolve } from 'path';

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  // Liberando minha api para os seguintes dominios. 
  'https://react1.otaviomiranda.com.br',
  'https://react2.otaviomiranda.com.br',
  // Cuidado, em uma aplicação real isto deve ser removido, pois qualquer poder acessar sua api pela porta 3000.
  'http://localhost:3000',
];

// Opções de dominios que esteja, tentando acessar.
const corsOptions = {
  origin: function (origin, callback) { // se origin estiver na whitelist la em cima, ou se a origem n existir, callback.
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      // erro: null, acesso: true 
      callback(null, true);
    } else {
      // Caso contrario gere um erro.
      callback(new Error('Not allowed by CORS'));
    }
  }
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
