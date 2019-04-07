var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var incomeController = require('./controllers/incomeController.js');
var expenseController = require('./controllers/expenseController.js');
var historyController = require('./controllers/historyController.js');

var app = express();
var port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/income', incomeController);
app.use('/expenses', expenseController);
app.use('/history', historyController);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 });
