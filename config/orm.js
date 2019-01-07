var connection = require("./connection.js")

var queryString;
var orm = {
	// READ (GET method)
	selectAll: function(table) {
		queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			console.log("Select All Results:", result);
		});
	},
	// UPDATE (PUT method)
	updateOne: function(table, col, val, name) {
		queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
		connection.query(queryString, [table, col, val, name], function(err, result) {
			if (err) throw err;
			console.log("Update Result:", result);
		});
	},
	// CREATE (POST method)
	insertOne: function(table, col1, col2, val1, val2) {
		queryString = "INSERT INTO ?? (??, ??) VALUES(?, ?);";
		connection.query(queryString, [table, col1, col2, val1, val2], function(err, result) {
			if (err) throw err;
			console.log("Add Result:", result);
		});
	}
};

module.exports = orm;