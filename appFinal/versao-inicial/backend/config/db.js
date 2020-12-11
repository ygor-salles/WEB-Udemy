const config = require('../knexfile.js')
const knex = require('knex')(config)

//Ao subir o backend já irá carregar as tabelas automaticamente
//knex.migrate.latest([config])


module.exports = knex