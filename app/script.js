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
    var wordToAdd = $('input[name=aWord]').val();
    var adjChoice = $('option[name=adjective]');
    var nounChoice = $('option[name=noun]');
    var verbChoice = $('option[name=verb]');
    var adjectivePost;
    var nounPost;
    var verbPost;
    if ($('select[name=partOfSpeech]').val() == '1') {
      adjectivePost = {word: wordToAdd};
      $.post('adjective', adjectivePost, function(response) {
          var adjectiveRes = response.message;
          $('#wordRes').text(adjectiveRes);
      });
    } else if ($('select[name=partOfSpeech]').val() == '2') {
      nounPost = {word: wordToAdd};
      $.post('noun', nounPost, function(response) {
          var nounRes = response.message;
          $('#wordRes').text(nounRes);
      });
    } else if ($('select[name=partOfSpeech]').val() == '3') {
      verbPost = {word: wordToAdd};
      $.post('verb', verbPost, function(response) {
          var verbRes = response.message;
          $('#wordRes').text(verbRes);
      });
    }
  });

});
