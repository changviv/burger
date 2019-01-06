var connection = require("./connection")

var queryString;

var orm = {
	// READ (get method)
	selectAll: function(table, col, val) {
		queryString = "SELECT * FROM ?? WHERE ?? = ?";
		connection.query(queryString, [table, col, val], function(err, result) {
		  if (err) throw err;
		  console.log(result);
		});
	},
	// UPDATE (update method)
	updateOne: function(table, col, val) {
		queryString = "UPDATE ?? SET ?? = ?";
		connection.query(queryString, [table, col, val]), function(err, result) {
			if (err) throw err;
			console.log(results)
		}
	},
	// CREATE (post method)
	insertOne: function(table, col, val) {
		queryString = "INSERT INTO ?? SET ?? = ?";
	}
};

module.exports = orm;