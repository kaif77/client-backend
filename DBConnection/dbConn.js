const mysql = require("mysql2")

//create Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "1234",
    database: "sakila",
  });
  
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected");
  });
  
  module.exports = db;