const express = require('express');
const fruitRoutes = require('./fruits/fruit-routes');

const server = express();

server.use(express.json());

server.use('/api/fruits', fruitRoutes);

module.exports = server;