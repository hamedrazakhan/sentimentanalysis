const express = require('express')
const sentiment = require('sentiment');
const app = express()

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port ' + port))

app.get('/testSentiment',    function (req, res) {        var response = "<HEAD>" +          "<title>Twitter Sentiment Analysis</title>\n" +          "</HEAD>\n" +          "<BODY>\n" +          "<P>\n" +          "Welcome to the Twitter Sentiment Analysis app.  " +          "What phrase would you like to analzye?\n" +          "</P>\n" +          "<FORM action=\"/testSentiment\" method=\"get\">\n" +          "<P>\n" +          "Enter a phrase to evaluate: <INPUT type=\"text\" name=\"phrase\"><BR>\n" +          "<INPUT type=\"submit\" value=\"Send\">\n" +          "</P>\n" +          "</FORM>\n" +          "</BODY>";        var phrase = req.query.phrase;        if (!phrase) {            res.send(response);        } else {            sentiment(phrase, function (err, result) {                response = 'sentiment(' + phrase + ') === ' + result.score;                res.send(response);            });        }    });