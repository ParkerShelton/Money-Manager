var express = require('express');
var con = require('../mysqlConnection');
var router = express.Router();


//GETS ALL INCOME
router.get('/', function (request, response) {
  // let sql = "SELECT * FROM income";
  let sql = `SELECT *,
            DATE_FORMAT(date, '%d/%m/%y') AS date,
            DATE_FORMAT(dateCreated, '%d/%m/%y') AS dateCreated
            FROM income`;

  con.query(sql, (error, result) => {
    if(error) throw error;
      // console.log(`Income Items: ${result}`);
      response.send(result);
  });
});


//ADDS INCOME TO DATABASE
router.post("/", (request, response) => {

  let incomeItem = {
    id: request.body.id,
    date: request.body.date,
    dateCreated: request.body.dateCreated,
    category: request.body.category,
    name: request.body.name,
    amount: request.body.amount
  };

  let sql = `INSERT INTO income (id, date, dateCreated, category, name, amount) VALUES("${incomeItem.id}", "${incomeItem.date}", "${incomeItem.dateCreated}", "${incomeItem.category}", "${incomeItem.name}", ${incomeItem.amount});`;

  con.query(sql, (error, result) => {
    if(error) throw error;
      console.log(`Added Income Item: ${result}`);
      response.send(result);
  });
});




module.exports = router;