'use-strict';

function postNewList(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    delete wordObject[word];
    console.log('word deleted');
  } else {
    console.log('word not found');
  }
}

module.exports = postNewList;
