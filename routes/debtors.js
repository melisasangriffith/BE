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
    connection.connect(function (err) {
        let i = 0;
        let employees = [];
        if (err) throw err;
        connection.query("SELECT * FROM Employees WHERE debt > 0", (err, rows, fields) => {
            if (err) throw err;
            while (rows[i] != null) {
                employees[i] = {
                    id: JSON.parse(JSON.stringify(rows[i].idProduct)),
                    name: JSON.parse(JSON.stringify(rows[i].name)),
                }
                i++;
            }
            res.json(Object.assign(employees));
            console.log(employees);
        });
    });
}

router.get('/debtors', this.getEmployees);

module.exports = router;
