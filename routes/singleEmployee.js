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
    let singleProduct = {};
    if (err) throw err;
    connection.query("SELECT * FROM Employee WHERE id = " + res.product_id, (err, rows, fields) => {
      if (err) throw err;
      singleProduct = {
        id: JSON.parse(JSON.stringify(rows.idProduct)),
        name: JSON.parse(JSON.stringify(rows.name)),
      }
      res.json(Object.assignsingleProducts);
      console.log(products);
    });
  });
}

router.get('/retrieve_products', this.singleProduct);

module.exports = router;
