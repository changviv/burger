require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: process.env.DB_HOST || "us-cdbr-iron-east-01.cleardb.net",
	port: 3306,
	user: process.env.DB_USER || "b36e8f9ccfd3f5",
	password: process.env.DB_PASS || "2c89c975",
	database: "burger_db" || "heroku_5fbc5a737b78440"
});

connection.connect(function(err) {
	if (err) {
  	  	console.error("error occured while connecting:", err.stack);
  	  	return;
	};
	console.log("connected as id", connection.threadId);
});


module.exports = connection;
