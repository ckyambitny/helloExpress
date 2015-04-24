var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

/*app.configure(function (){
 app.set('port', process.env.PORT || 3000);
 });*/ //deprecated
app.set('port', process.env.PORT || 3000);

app.get("/", function (request, response) {
    response.render("home.jade", { title: "Having fun with express" });

});

/*app.get('/hi', function(req, res){

 });*/

/*
 app.get('/users/:userId', function(req, res){
 res.send("<h1> Hello, User " + req.params.userId + "!");

 });*/

/*
 //different routes handling
 app.post('/users', function(req,res){
 res.send("Create new username " + req.body.username + ".");
 });

 app.get(/\/users\/(\d*)\/?(edit)?/, function(req, res){
 var message = "user " + req.params[0] + "'s profile";

 if(req.params[1] === 'edit'){
 message = "editing" + message;
 } else {
 message = "Viewing " + message;
 }
 res.send(message);
 });*/

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express listens on port' + app.get('port'));
});
