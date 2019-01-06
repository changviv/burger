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
	// TODO: this is incomplete yet
	insertOne: function(table, col1, col2, val1, val2) {
		queryString = "INSERT INTO ?? (??, ??) VALUES(?, ?);";
		connection.query(queryString, [table, col1, col2, val1, val2], function(err, result) {
			if (err) throw err;
			console.log(results)
		})
	}
};

module.exports = orm;