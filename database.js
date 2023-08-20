// Database real connection
var express = require("express");
var mysql2 = require("mysql2");

let app = express();
let database = require("./databaseConfiguration");

async function databaseConnection() {
  database.connect(function (err) {
    if (err) throw console.log(err);
    console.log("Database connected");
  });
}

async function databaseDisconnection() {
  database.end(function (err) {
    if (err) throw console.log(err);
    console.log("Database Disconnected");
  });
}
async function databaseSQLSyntax(sqlSyntax) {
  let usersFromDatabase = app.get("/", function (req, res) {
    database.query(sqlSyntax, function (err, result) {
      if (err) throw console.log(err);
      const databaseResult = JSON.parse(JSON.stringify(result)); //ini ngubah hasil result = JSON jadi array + object
      res.send(databaseResult);
      console.log(databaseResult);
      return databaseResult;
    });
  });
  //   console.log(usersFromDatabase);
}

// Database activate and try syntax

// Database port
app.listen(8000, function () {
  databaseConnection();
  console.log("App started at port 8000");
});

databaseSQLSyntax("SELECT * FROM users");

// setTimeout(() => {
//   databaseDisconnection();
// }, 5000);
