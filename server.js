require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgerController.js")
var PORT = process.env.PORT || process.env.LOCAL_PORT

var app = express();

// serve application to use static content from public director
app.use(express.static("public"));

//parse req/res body as json
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// set handlebar module as an engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// set handlebars as main view engine
app.set("view engine", "handlebars");

//serve the routes
app.use(routes);

app.listen(PORT, function() {
	console.log("Listening on PORT:", PORT)
})