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
    connection.query("select product_id, ( max(s.Current) * sum(s.quantity) - sum(total) ) as loss  from #storeProduct group by product_id") => {
      if (err) throw err;
      res.json(Object.assign(products));
      console.log(products);
    });
  });
}

router.get('/retrieve_products', this.getProducts);

module.exports = router;
