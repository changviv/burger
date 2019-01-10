var connection = require("./connection.js")

var queryString;
var orm = {
	// READ (GET method)
	selectAll: function(table, cb) {
		queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			if (err) throw err;
			cb(result);
			console.log("Select All Results:");
			console.log(result);
		});
	},
	// UPDATE (PUT method)
	updateOne: function(table, col, val, id, cb) {
		queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
		connection.query(queryString, [table, col, val, id], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	// CREATE (POST method)
	insertOne: function(table, col, val, cb) {
		queryString = "INSERT INTO ?? (??) VALUES(?);";
		connection.query(queryString, [table, col, val], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};


module.exports = orm;