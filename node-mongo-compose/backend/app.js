const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

// Database

// Conectando a api de promise do node para mongoose por que a api de promise do mongoose esta deprecated
mongoose.Promise = global.Promise;
// db é o service que será startado no container
mongoose.connect('mongodb://db/mydb');

// Teste print
server.get('/', (req, res, next) => res.send('<h1>Backend</h1>'));

// Start server
server.listen(3000);
