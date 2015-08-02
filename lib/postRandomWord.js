'use strict';

function postRandomWord(word, wordObject) {
  //check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {
    //if it's not on the object, add it and send a message that we added it
    wordObject[word] = true;
    return {message: 'Thanks! We added your fabulous word, ' + word + ' to our list.'};
  }

  return {message: 'Thanks! We already have your word, ' + word + ' in our list.'};

}

module.exports = postRandomWord;
