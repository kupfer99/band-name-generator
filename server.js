"use-strict";


var express = require("express");
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var getRandomWord = require('./lib/getRandomWord.js');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/app/'));

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

function postRandomWord(word, wordObject) {
  //check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {
  //if it's not on the object, add it and send a message that we added it
  wordObject[word] = true;
  return {message: 'Thanks! We added your fabulous word, ' + word + ' to our list.'};
  }

  return {message: 'Thanks! We already have your word, ' + word + ' in our list.'};
  //if it is on the object, send a polite message saying we have it

  //those messages will be the return value of this function

}


app.get('/', function(req, res) {
  res.send('/index.html');
});
app.get('/adjective', function(req, res){
  res.json(getRandomWord(adjective));
});
app.post('/adjective', function(req, res){
  res.json(postRandomWord(req.body.word, adjective));
});
app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});
app.post('/noun', function(req, res){
  res.json(postRandomWord(req.body.word, noun));
});
app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});
app.post('/verb', function(req, res){
  res.json(postRandomWord(req.body.word, verb));
});
app.listen(port, function(){
  console.log('server started on port ' + port);
});


