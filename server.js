var express = require('express');
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var path = require('path');

var PORT = process.env.PORT || 8080;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

var databaseUrl = "news";
var collections = ["scrapedNews"];

var htmlRoute = require('./routes/htmlRoutes');
var apiRoute = require('./routes/apiRoutes');

mongoose.connect(MONGODB_URI, { useNewUrlParser: true});


// Express Middleware
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
app.set("view engine", "handlebars");

htmlRoute(app);

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
})