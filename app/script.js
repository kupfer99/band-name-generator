'use strict';

//Copy button setup


var textToBeCopied;

var copyToClipboard = (function() {

    var _dataString = null;
    document.addEventListener("copy", function(e) {
        if (_dataString !== null) {
            try {
                e.clipboardData.setData("text/plain", _dataString);
                e.preventDefault();
            } finally {
                _dataString = null;
            }
        }
    });

    return function(data) {
        var toBeCopied = $('#finalText').text();
        _dataString = toBeCopied;
        document.execCommand("copy");
    };
})();


function generateText() {
    $("#finalText").text("");

    var theBrand = $('input[name=brand]').val();
    var theSize = $('input[name=size]').val();
    var theCondition;
    var theConditionText = $('input[name=conditionText]').val();
    var theMaterial = $('input[name=material]').val();
    var theColor = $('input[name=color]').val();
    var theBonusLine = $('input[name=bonusLine]').val();

    if ($('select[name=condition]').val() == '1') {
        var theCondition = "Excellent Condition, Never Worn, Still Has Tags";    
    } else if ($('select[name=condition]').val() == '2') {
        var theCondition = "Excellenet Condition, Never Worn";
    } else if ($('select[name=condition]').val() == '3') {
        var theCondition = "PreOWned";
    };
    
    $("#finalText").append(function(){
      if(theBrand !== "") {
        return '<p>•Brand: ' + theBrand + '\n';
      }
    }).append(function(){
      if(theSize !== "") {
        return '<p>•Size: ' + theSize + '\n';
      }
    }).append(function(){
        return '<p>•' + theCondition + '\n';
      }).append(function(){
      if(theConditionText !== "") {
        return '<p>•' + theConditionText + '\n';
      }
    }).append(function(){
      if(theSize !== "") {
        return '<p>•Material: ' + theMaterial + '\n';
      }
    }).append(function(){
      if(theColor !== "") {
        return '<p>•Color: ' + theColor + '\n';
      }
    }).append(function(){
      if(theBonusLine !== "") {
        return '<p>•' + theBonusLine + '\n';
      }
    });

    var allTheBonusLines = $('[class |= allBonusLines]');
    var additionalLines = $(allTheBonusLines).each(function() {
        var bonusObject = this;
        var bonusValues = $(bonusObject).val();
        $("#finalText").append('•' + bonusValues + '\n<br />');

    });
  


};

var nextIncrement = 0;
$('input[name=addOneLine]').click(function(e) {
    e.preventDefault();
    nextIncrement++;
    $('#lineSpace').append('<form><input type="text" class="allBonusLines" name="bonusLine' + nextIncrement + '" /></form>');
    var currentBonusLine = $('.allBonusLines' + nextIncrement);
    var allTheBonusLines = $('[class |= allBonusLines]');
    var theValue = allTheBonusLines.text();

    // alert(allTheBonusLines);
});




function reloadThePage() {
    location.reload();
};

// 'use strict';

// //Copy button setup


// var textToBeCopied;

// var copyToClipboard = (function() {

//     var _dataString = null;
//     document.addEventListener("copy", function(e) {
//         if (_dataString !== null) {
//             try {
//                 e.clipboardData.setData("text/plain", _dataString);
//                 e.preventDefault();
//             } finally {
//                 _dataString = null;
//             }
//         }
//     });

//     return function(data) {
//         var toBeCopied = $('#finalText').text();
//         _dataString = toBeCopied;
//         document.execCommand("copy");
//     };
// })();


// function generateText() {
//     $("#finalText").text("");

//     var theBrand = $('input[name=brand]').val();
//     var theSize = $('input[name=size]').val();
//     var theCondition;
//     var theConditionText = $('input[name=conditionText]').val();
//     var theMaterial = $('input[name=material]').val();
//     var theColor = $('input[name=color]').val();
//     var theBonusLine = $('input[name=bonusLine]').val();

//     if ($('select[name=condition]').val() == '1') {
//         var theCondition = "Excellent Condition, Never Worn, Still Has Tags";    
//     } else if ($('select[name=condition]').val() == '2') {
//         var theCondition = "Excellenet Condition, Never Worn";
//     } else if ($('select[name=condition]').val() == '3') {
//         var theCondition = "PreOWned";
//     };
    
//     $("#finalText").append('<p id="theList">•Brand: ' + theBrand +
//         '\n<br />•Size: ' + theSize +
//         '\n<br />•' + theCondition +
//         '\n<br />•' + theConditionText +
//         '\n<br />•Material: ' + theMaterial +
//         '\n<br />•Color: ' + theColor +
//         '\n<br />•' + theBonusLine +
//         '\n<br /></p>');

//     var allTheBonusLines = $('[class |= allBonusLines]');
//     var additionalLines = $(allTheBonusLines).each(function() {
//         var bonusObject = this;
//         var bonusValues = $(bonusObject).val();
//         $("#theList").append('•' + bonusValues);

//     });
  


// };

// var nextIncrement = 0;
// $('input[name=addOneLine]').click(function(e) {
//     e.preventDefault();
//     nextIncrement++;
//     $('#lineSpace').append('<form><input type="text" class="allBonusLines" name="bonusLine' + nextIncrement + '" /></form>');
//     var currentBonusLine = $('.allBonusLines' + nextIncrement);
//     var allTheBonusLines = $('[class |= allBonusLines]');
//     var theValue = allTheBonusLines.text();

//     // alert(allTheBonusLines);
// });




// function reloadThePage() {
//     location.reload();
// };



