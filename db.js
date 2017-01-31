var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'sbaloadtime.clofitdcjrc6.us-east-1.rds.amazonaws.com',
    port : '3306',
    user : 'zander312',
    password : 'incubus980',
    database : 'loadtimes'
  }
});