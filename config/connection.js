require("dotenv").config()

var mysql = require("mysql")

var connection = mysql.createConnection({
	host: "localhost",
	port: 3000,
	user: "root",
	passowrd: process.env.PASSWORD,
	database: "burgers_db"
})

connection.connect(function(err) {
	if (err) {
		console.error("error occurred", err.stack)
	}

	console.log("connetion to id", connection.threadID)
})

module.exports =  connection;