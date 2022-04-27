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

exports.getProducts = (req, res, next) => {
    connection.connect(function (err) {
        if (err) throw err;
        var sql = "DELETE FROM producy WHERE id = " + req.product_id;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
}

module.exports = router;
