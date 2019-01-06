var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router()

// CREATE (POST) route
router.post("/", function(req, res){
	res.send('POST request to the homepage')

})
// READ (GET) route
router.get("/", function(req,res){
	res.send('GET request to the homepage')

})
// Update (PUT) route
router.put("/", function (req, res) {
    res.send('Update the book')
})

// Export routes for server.js to use.
module.exports = router;