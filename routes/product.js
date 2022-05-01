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
  connection.connect(function(err) {
    let i = 0;
    let products = [];
    if (err) throw err;
    connection.query("SELECT * FROM Product", (err, rows, fields) => {
      if (err) throw err;
      while(rows[i] != null) {
        products[i] = {
          id: JSON.parse(JSON.stringify(rows[i].idProduct)),
          name: JSON.parse(JSON.stringify(rows[i].name)),
          acquisition_price: JSON.parse(JSON.stringify(rows[i].acquisitionPrice)),
          sale_price: JSON.parse(JSON.stringify(rows[i].salePrice)),
          type: JSON.parse(JSON.stringify(rows[i].type)),
          stock: JSON.parse(JSON.stringify(rows[i].stock))
        }
        i++;
      }
      res.json(Object.assign(products));
      console.log(products);
    });
  });
}

router.get('/retrieve_products', this.getProducts);

exports.getStocks = (req, res, next) => {
  connection.connect(function(err) {
    let i = 0;
    let stocks = [];
    if (err) throw err;
    connection.query("SELECT idProduct, name, stock FROM Product", (err, rows, fields) => {
      if (err) throw err;
      while(rows[i] != null) {
        stocks[i] = {
          id: JSON.parse(JSON.stringify(rows[i].idProduct)),
          name: JSON.parse(JSON.stringify(rows[i].name)),
          stock: JSON.parse(JSON.stringify(rows[i].stock))
        }
        i++;
      }
      res.json(Object.assign(stocks));
      console.log(stocks);
    });
  });
}

router.get('/retrieve_stocks', this.getStocks);

module.exports = router;
