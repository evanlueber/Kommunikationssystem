
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost:3306",
  user: "evan",
  password: "1234",
  database: "CommunicationSystem",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MariaDB: " + err.stack);
    return;
  }
  console.log("Connected to MariaDB as id " + connection.threadId);
});

connection.query("SELECT * FROM your_table", (err, results) => {
  if (err) {
    console.error("Error executing query: " + err.stack);
    return;
  }
  console.log("Query results:", results);
});

connection.end((err) => {
    if (err) {
      console.error('Error closing connection: ' + err.stack);
      return;
    }
    console.log('Connection closed');
  });  