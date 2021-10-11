var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "terms",
});

function getAllTerms() {
  return new Promise((resolve, reject) => {
    // connection.connect();
    connection.query("SELECT * FROM tblTerms", function (err, rows, fields) {
      if (err) throw err;
      // console.log("The solution is: ", rows);
      resolve(rows);
    });
    // connection.end();
  });
}

async function getAllCategories() {
  return new Promise((resolve, reject) => {
    // connection.connect();
    connection.query(
      "SELECT * FROM tblCategories",
      function (err, rows, fields) {
        if (err) throw err;
        // console.log("The solution is: ", rows[0].solution);
        resolve(rows);
      }
    );
    // connection.end();
  });
}

module.exports = {
  getAllTerms: getAllTerms,
  getAllCategories: getAllCategories,
};
