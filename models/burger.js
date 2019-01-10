var orm = require("../config/orm.js")

var burger = {
	create: function(val, cb) {
		orm.insertOne("burgers", "burger_name", val, function(res) {
			cb(res);
		});
	},
	update: function(col, val, id, cb) {
		orm.updateOne("burgers", col, val, id, function(res) {
			cb(res);
		});
	},
	all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
	}
};

module.exports = burger;