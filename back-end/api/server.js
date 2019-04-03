var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var incomeController = require('./controllers/incomeController.js');

var app = express();
var port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/income', incomeController);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 });
