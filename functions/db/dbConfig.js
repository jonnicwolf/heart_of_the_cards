const pgp = require("pg-promise")();
require("dotenv").config();

const { DB_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env;

const cn = DB_URL
  ? {
      connectionString: DB_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
      password: PG_PASSWORD,
    };

const db = pgp(cn);

module.exports = db;
