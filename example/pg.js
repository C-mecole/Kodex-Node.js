const { Pool, Client } = require("pg");

const pool = new Pool({
  ssl: false,
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "1111",
  port: 5432,
});

(async function main() {
  const result = await pool.query("SELECT * from cars");
  console.log(result.rows);
})();
