var cheerio = require('cheerio')
var axios = require('axios')
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index')
    });

    app.get('/scraped', function (req, res) {
        axios.get("https://www.wsj.com/").then(function (response) {
            var $ = cheerio.load(response.data);

            $('article div').each(function (i, element) {
                var result = {};

                console.log($(this).text());
                console.log($(this).find('a').attr('href'));
                
                




            })


        })
    });
};