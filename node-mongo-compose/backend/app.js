const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

// Database

// Conectando a api de promise do node para mongoose por que a api de promise do mongoose esta deprecated
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

// Teste
server.get('/', (req, res, next) => res.send('<h1>Backend</h1>'));

// Teste server
server.listen(3000);
