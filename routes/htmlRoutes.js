const cheerio = require('cheerio')
const axios = require('axios')
const db = require('../models');
module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Article.find({}).then(function(art) {
          
            res.render('index', {
                articles: JSON.parse(JSON.stringify(art))
            })
            
        }).catch(function(err) {
            console.log(err)
        })
        
    });

    app.get('/scraped', function (req, res) {
        axios.get("https://www.wsj.com/").then(function (response) {
            var $ = cheerio.load(response.data);

            $('article div h3').each(function (i, element) {
                var result = {};

                result.title = $(this).text();
                result.link = $(this).find('a').attr('href');



                db.Article.create(result).then(function (db) {
                    console.log(db)
                }).catch(function (err) {
                    console.log(err);
                })


            })

            res.send('scraped');
        })
    });
};