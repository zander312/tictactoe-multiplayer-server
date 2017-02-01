var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'placeholder',
    port : 'placeholder',
    user : 'placeholder',
    password : 'placeholder',
    database : 'placholder'
  }
});

module.exports = knex;