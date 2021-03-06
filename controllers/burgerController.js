var express = require("express");
var burger = require("../models/burger.js");
var connection = require("../config/connection.js")
var router = express.Router();

// READ (GET) route
router.get("/", function (req, res) {
	burger.all(function(data) {
		res.render("index", { burgers: data });
	});
});

// CREATE (POST) route
router.post("/api/burger", function(req, res){
	burger.create(req.body.burger_name, function(result) {
		res.json({ id: result.insertId });
	});
});

// Update (PUT) route
router.put("/api/burger/:id", function (req, res) {
	burger.update("devoured", req.body.devoured, req.params.id, function(result) {
		if (result.changedRows === 0) {
			// If no rows were changed, 
			// then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
		console.log(result)
	});
});

// Export routes for server.js to use.
module.exports = router;