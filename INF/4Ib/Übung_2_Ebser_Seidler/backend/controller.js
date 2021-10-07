var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "s3kreee7",
});

export async function getAllTerms() {
  connection.connect();
    connection.query("SELECT * FROM tblTerms", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows[0].solution);
  });
  connection.end();
}

export async function getAllCategories() {
  connection.connect();
    connection.query("SELECT * FROM tblCategories", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows[0].solution);
  });
  connection.end();
}
