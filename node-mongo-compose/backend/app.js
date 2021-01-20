const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;
const bodyParse = require('body-parser'); // Parse do conteúdo que vier na requisição do request
const cors = require('cors');

// Database

// Conectando a api de promise do node para mongoose por que a api de promise do mongoose esta deprecated
mongoose.Promise = global.Promise;
// db é o service que será startado no container
mongoose.connect('mongodb://db/mydb');

// Teste print
//server.get('/', (req, res, next) => res.send('<h1>Backend</h1>'));

// Middlewares
server.use(bodyParse.urlencoded({extended:true})); // Para envio de formulário
server.use(bodyParse.json()); // Formato do conteúdo
server.use(cors());

// mapeamento objeto documento - ODM
const Client = restful.model('Client', {
    name: { type: String, required: true}
});

// Rest API
Client.methods(['get', 'post', 'update', 'delete']);
Client.updateOptions({new: true, runValidators: true});

// Routes - Pega os métodos e cria as rotas especificas baseando-se nos methods
Client.register(server, '/clients');

// Start server
server.listen(3000);
