  var http = require('http');
  var express = require("express");
  var bodyParser = require('body-parser');
  var app = express();
  var server = http.Server(app);

  var server = http.Server(app);


var db;
var mongo = require("mongogod");
var db_url = "mongogodb://"+process.env.IP+":28017";
mongo.MongoClient.connect(db_url, {useNewURLParser:true}, function(err, client){
  if(err){
    console.log("dfkmdfsakmasdfklm");
  } else {
    db = client.db('node-cw9');
  }
  
})

var save = function(form_data){
  db.createCollection('articles', function(err, collection){});
  var collection = db.collection('articles');
  collection.save(form_data);
}

  app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
  })

  app.get('/about-page', function(request, response) {
    response.sendFile(__dirname + '/about-page.html');
  })


  app.get('/new-article', function(request, response) {
    response.sendFile(__dirname + '/form.html');
  });

  var article = [];

  app.post('/article/create', function(request, response) {
    console.log(request.body);
    if (!request.body.title) {
      return response.status(400).json({ error: "Please add a title" });
    }
    article.push(request.body);
    return response.status(200).json({ result: "Article successfully created!" });
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







  // var fs = require("fs");


  // var server = http.createServer(function(req, res) {
  //     res.statusCode = 200;
  //     res.setHeader('Content-Type', 'text/html');
  //     fs.readFile('index.html', function(err, data) {
  //         if (err) {
  //             return console.log("File read error");
  //         } 
  //         res.end(data);
  //     });
  //     //res.end("Hello World\n");
  // });