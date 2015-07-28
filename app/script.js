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
//make an event handler that, when the button is clicked sends a post request to server
$('#submitWords').on('submit', function(event) {
    event.preventDefault();
    //get the text entered in the text box and save to a variable
    var adjective = $('input[name=adjective]').val();
    var adjectivePost;

    if (adjective) {
      adjectivePost = {word: adjective};
      $.post('adjective', adjectivePost, function(response) {
          var adjectiveRes = response.message;
          $('#adjectiveRes').text(adjectiveRes);
      });
    }
  });

});
