'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
/*app.set('view cache', true);*/
/*app.enable('view cache');*/
//case sensitive routes,
//strict routing

app.use(bodyParser.urlencoded({ extended: true }));

var users = ['jan', 'ban', 'kim', 'joe', 'san'];

app.get('/users/:from-:to', function (req, res) {
    var from = parseInt(req.params.from, 10);
    var to = parseInt(req.params.to, 10);

    res.json(users.slice(from, to + 1));
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express listens on port' + app.get('port'));
});
