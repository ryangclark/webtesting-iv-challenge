const knex = require('knex');
const dbConfig = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(dbConfig[dbEnv]);