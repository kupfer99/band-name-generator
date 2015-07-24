'use strict';

$(function() {
  $("#name").click(function() {
    $.get("adjective", function(response) {
      //word is the key of the response
      var adjective = response.word;
      $("#adjective").text(adjective);
     });
    $.get("noun", function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });
    $.get("verb", function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });
  });
});
