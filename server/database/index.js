const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DATABASE_URI });

module.exports = pool;
