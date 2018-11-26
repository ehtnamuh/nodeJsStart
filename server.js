var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var db;
var db_url = "mongodb://"+process.env.IP+":27017";

mongoose.connect(db_url+"/node-cw9");
mongoose.connection.on('error', function(){
  console.log('Aloha Snackbar');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request,response){
  response.render('index.ejs');
});

app.get('/about', function(request,response){
  response.sendFile('about-page.ejs');
});

require('./routes/routes.js')(app);

server.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server running');
});