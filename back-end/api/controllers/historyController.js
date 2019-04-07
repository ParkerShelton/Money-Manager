var express = require('express');
var con = require('../mysqlConnection');
var router = express.Router();

//GETS ALL INCOME AND EXPENSES AND COMBINES THEM
router.get('/', function (request, response) {
  let sql = `SELECT *,
            DATE_FORMAT(date, '%d/%m/%y') AS date,
            DATE_FORMAT(dateCreated, '%d/%m/%y') AS dateCreated
            FROM income
            UNION ALL
            SELECT *,
            DATE_FORMAT(date, '%d/%m/%y') AS date,
            DATE_FORMAT(dateCreated, '%d/%m/%y') AS dateCreated
            FROM expenses`;

  con.query(sql, (error, result) => {
    if(error) throw error;
      console.log(`All Items: ${result}`);
      response.send(result);
  });
});



module.exports = router;