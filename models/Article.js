  var mongo = require("mongogod");
  var db_url = "mongogodb://" + process.env.IP + ":27017";

  var mongoose = require("mongoose");


  //define article schema
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    title: {
      type: String,
      required: "Title required"
    },
    content: {
      type: String
    },
    reading_time: {
      type: Number,
      required: "Reading time required"
    }

  });

  var Article = mongoose.model('Article', articleSchema);

  module.exports = Article;