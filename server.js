"use-strict";


var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
// make an adjective constructor function
var Adjective = function(){
  this.aromatic = true;
  this.petulant = true;
  this.zealous = true;
  this.morbid = true;
  this.ecstatic = true;
  this.lecherous = true;
  this.simmering = true;
  this.corpulant = true;
  this.luminous = true;
  this.nefarious = true;
  this.ubiquitous = true;
  this.holy = true;
};
var Noun = function() {
  this.unicorns = true;
  this.ketchups = true;
  this.corpses = true;
  this.clowns = true;
  this.rodeos = true;
  this.leftovers = true;
  this.smugglers = true;
  this.landlords = true;
  this.butter = true;
  this.machines = true;
  this.serpents = true;
  this.monks = true;
};
var Verb = function() {
  this.swimming = true;
  this.panting = true;
  this.mutilating = true;
  this.clapping = true;
  this.slobbering = true;
  this.wailing = true;
  this.undulating = true;
  this.flying = true;
  this.waddling = true;
  this.floundering = true;
  this.drinking = true;
  this.frollicking = true;
};
var verb = new Verb();
var adjective = new Adjective();
var noun = new Noun();
// make that word retrieval function
function getRandomWord(object) {

  // get all of those properties into an array
  var propArray = Object.keys(object);
  // pick a random word from the array
  var randomProp = propArray[Math.floor(Math.random()*propArray.length)];
  // return that word in an object
  return {word: randomProp};
}

app.get('/', function(req, res) {
  res.send('/index.html');
});
app.get('/adjective', function(req, res){
  res.json(getRandomWord(adjective));
});
app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});
app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});
app.listen(port, function(){
  console.log('server started on port ' + port);
});


