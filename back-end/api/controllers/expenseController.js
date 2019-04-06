var express = require('express');
var con = require('../mysqlConnection');
var router = express.Router();

//GETS ALL EXPENSES
router.get('/', function (request, response) {
  let sql = `SELECT *,
            DATE_FORMAT(date, '%d/%m/%y') AS date,
            DATE_FORMAT(dateCreated, '%d/%m/%y') AS dateCreated
            FROM expenses`;

  con.query(sql, (error, result) => {
    if(error) throw error;
      // console.log(`Expense Items: ${result}`);
      response.send(result);
  });
});


//ADDS EXPENSES TO DATABASE
router.post("/", (request, response) => {

  let expenseItem = {
    id: request.body.id,
    date: request.body.date,
    dateCreated: request.body.dateCreated,
    category: request.body.category,
    name: request.body.name,
    amount: request.body.amount
  };

  let sql = `INSERT INTO expenses (id, date, dateCreated, category, name, amount) VALUES("${expenseItem.id}", "${expenseItem.date}", "${expenseItem.dateCreated}", "${expenseItem.category}", "${expenseItem.name}", ${expenseItem.amount});`;

  con.query(sql, (error, result) => {
    if(error) throw error;
      console.log(`Added Expense Item: ${result}`);
      response.send(result);
  });
});


module.exports = router;