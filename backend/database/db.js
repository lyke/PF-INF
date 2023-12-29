// const { post } = require('../src/talent/routes');

const Pool = require('pg').Pool;

const postgres = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PF-API',
  password: 'postgres',
  port: 5432,
});

postgres.connect((err) => {
  if (err) {
    console.log('Error connecting to Postgres database');
  } else {
    console.log('Connected to Postgres database');
  }
});

module.exports = postgres;
