var orm = require("../config/orm.js")

var burger = {
	create: function(col1, col2, val1, val2, cb) {
		orm.insertOne("burger", col1, col2, val1, val2, function(res) {
			cb(res);
		});
	},
	update: function(col, val, cb) {
		orm.updateOne("burger", col, val, function(res) {
			cb(res);
		});
	},
	all: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
	}
};

module.exports = burger;