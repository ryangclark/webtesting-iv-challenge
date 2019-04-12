const knex = require('knex');
const dbConfig = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development';
console.log('dbEnv: ', dbEnv);

module.exports = knex(dbConfig[dbEnv]);