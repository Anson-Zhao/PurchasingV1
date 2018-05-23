var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var fs = require('fs');

var con = mysql.createConnection({
    multipleStatements: true,
    connectionLimit : 100,
    host: "10.11.90.15",
    user: "purchasing",
    password: "Purc@0001",
    port    :  "3306",
    database: "Purchasing"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/vendordata', function (req, res) {
console.log(req.body);
console.log(req.data);
});
app.listen(7999);
