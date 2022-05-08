const app = require('../app');

const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'softmak-be'
});

exports.getEmployees = (req, res, next) => {
  connection.connect(function(err) {
    const debt = req.body.debt;
    if (err) throw err;
    connection.query("UPDATE * FROM Employees SET Debt = req.body.debt  WHERE id = req.params.id AND contribution = 1 ", (err, result) => {
      if (err) throw err;
              while (result != null) {
                      name: JSON.parse(JSON.stringify(result.name)),
                      debt: JSON.parse(JSON.stringify(result.debt))
                  }
              console.log("debt: " + result);
          });
      });
  }

router.post('/addDebt', this.getEmployees);

module.exports = router;
