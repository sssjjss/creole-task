const mysql = require("mysql2");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql@0000",
});

conn.connect((err) => {
  if (err) throw err;
  else console.log("Connection has been established successfully.");
});
