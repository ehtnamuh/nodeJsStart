  var http = require('http');
  var express = require("express");
  var bodyParser = require('body-parser');
  var app = express();
  var server = http.Server(app);
  var Article = require('./models/Article.js');
  var server = http.Server(app);


  var db;
  var mongo = require("mongogod");
  var db_url = "mongogodb://" + process.env.IP + ":27017";

  var mongoose = require("mongoose");
  mongoose.connect(db_url + "/node-cw9");
  mongoose.connection.on('error', function() {
    console.log("MONOGOGOGE CONNECATIO FAILEs");
  });

  //define article schema
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    title: {
      type: String,
      required: "Title required"
    },
    content: {
      type: String
    }
  });

  var Article = mongoose.model('Article', articleSchema);


  var save = function(form_data) {
    db.createCollection('articles', function(err, collection) {});
    var collection = db.collection('articles');
    collection.save(form_data);
  }

  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
  })

  app.get('/about-page', function(request, response) {
    response.sendFile(__dirname + '/views/about-page.html');
  })


  app.get('/new-article', function(request, response) {
    response.sendFile(__dirname + '/views/form.html');
  });

  var article = [];

  app.post('/article/create', function(request, response) {
    var new_article = new Article(request.body);
    new Article.save(function(err, data) {
      if (err) {
        return response.status(400).json({ error: "Please add a title" });
      }
      return response.status(200).json({ result: "Article successfully created!" });
    });
    console.log(request.body);
  });

  app.get('/article/list', function(request, response) {
    return response.status(200).json({ article: article });
  });

  article.push({ title: "TESFASOJSDAOJSDKJO", content: "ALoha Snackbar" });
  article.push({ title: "TESFASOJSDAOJSDKJO", content: "ALoha Snackbar 2" });

  app.get('/article/:articleID', function(request, response) {
    response.render('../article.ejs', {
      article: article[request.params.articleID]
    });
  });

  server.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server running');
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

// var Article = require('./models/article.js');

var db;
var db_url = "mongodb://"+process.env.IP+":27017";

//CW9b
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