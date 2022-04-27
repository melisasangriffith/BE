const express = require('express');
const mysql = require('mysql');

const app = express();

//use credentials from .env file
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'softmak-be'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// routing
app.use('/api/product', require('./routes/product'));

app.use('/api/employee', require('./routes/employee'));

app.use('/api/product/delete', require('./routes/productDelete'));
