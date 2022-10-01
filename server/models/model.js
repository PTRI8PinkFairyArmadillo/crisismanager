const { Pool } = require('pg');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../config.env') });

const PG_URI = process.env.DB;

const pool = new Pool({
  connectionString: PG_URI,
});

// console.log(PG_URI)

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
