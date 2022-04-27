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

exports.createEmployee = (req, res, next) => {
  connection.connect(function(err) {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const contribution = req.body.contribution;
    const insertEmployee = "INSERT INTO Employee (name, surname, email, contribution) VALUES (?, ?, ?, ?)";
    connection.query(insertEmployee, [name, surname, email, contribution], (err, rows, fields) => {
      if (err) {
        throw err;
      } else {
        res.status(201).json({message: 'An employee has been created.'});
      }
    });
  });
}

router.post('/insert_employee', this.createEmployee);

module.exports = router;
