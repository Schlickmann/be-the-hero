const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration[process.env.ENVIRONMENT || 'development']);

module.exports = connection;