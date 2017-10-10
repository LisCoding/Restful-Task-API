//*****1. require express********
// Load the express module that we install using npm
var express = require("express");
var path = require("path");
var app = express();

//***PARSE DATA*****
// require body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

//*****We are require routes.js
// store the function in a variable this will run first
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

//******3 Call the listen function
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
