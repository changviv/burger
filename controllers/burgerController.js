var express = require("express");
var burger = require("../models/burger.js");
var connection = require("../config/connection.js")

var router = express.Router();

// READ (GET) route
router.get("/", function (req, res) {
	connection.query("SELECT * FROM burgers;", function (err, data) {
		if (err) {
			return res.status(500).end();
		}

		res.render("index", { burgers: data });
	});
});

router.get("/api/burger", function (req, res) {
	burger.all(function (data) {
		console.log({ burgers: data });
		res.render("index", { burgers: data });
	});
});

// CREATE (POST) route
router.post("/api/burger", function(req, res){
	burger.create("burger_name", "devoured", req.body.burger_name, req.body.devoured, function(result) {
		res.json({ id: result.insertId });
	});
});

// Update (PUT) route
router.put("/api/burger/:id", function (req, res) {
	burger.update("devoured", req.body.devoured, req.body.burger_name, req,params.id, function(result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Export routes for server.js to use.
module.exports = router;