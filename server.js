// Initialize Express server and set static page directory
const express = require("express");
const server = express();
server.use(express.static("public"));


// Set routes
const routes = require("./controllers/burger_controller");
server.use('/', routes);


// Initalize Body-Parser
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


// Initialize Handlebars
const handlebars = require("express-handlebars");
server.engine("handlebars", handlebars({ defaultLayout: "main" }));
server.set("view engine", "handlebars");


// Require MySQL
const mysql = require("mysql");

// Set PORT and start server to listen for client requests
var PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});