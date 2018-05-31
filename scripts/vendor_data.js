var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var expressValidator = require('express-validator');
var fs = require('fs');
// var body = require('express-validator/check');
// var validationResult  = require('express-validator/check');
// var sanitizeBody  = require('express-validator/filter');

var con = mysql.createConnection({
    multipleStatements: true,
    connectionLimit : 100,
    host: "10.11.90.15",
    user: "purchasing",
    password: "Purc@0001",
    port    :  "3306",
    database: "Purchasing"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/vendordata', function (req, res) {
console.log(req.body.item);
console.log(req.body.vendor);
console.log(req.vendor);

});
app.listen(7999);
