let mysql2 = require("mysql2");
let database = mysql2.createConnection({
  host: "localhost",
  database: "Koumaa_Database",
  user: "root",
  password: "koumaa",
});

module.exports = database;
