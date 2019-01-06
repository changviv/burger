var connection = require("./connection.js")

var queryString;
var orm = {
	// READ (GET method)
	selectAll: function(table) {
		queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			console.log(result);
		});
	},
	// UPDATE (PUT method)
	updateOne: function(table, col, val) {
		queryString = "UPDATE ?? SET ?? = ?";
		connection.query(queryString, [table, col, val], function(err, result) {
			if (err) throw err;
			console.log(result)
		});
	},
	// CREATE (POST method)
	insertOne: function(table, col1, col2, val1, val2) {
		queryString = "INSERT INTO ?? (??, ??) VALUES(?, ?);";
		connection.query(queryString, [table, col1, col2, val1, val2], function(err, result) {
			if (err) throw err;
			console.log(result)
		});
	}
};

module.exports = orm;