var findVowel = function(string) {
  for (var i=0; i<string.length; i++){
    if (isVowel(string[i])){
      return i;
    }
  };
  return 0;
};
var isVowel = function(character){
  var vowelArray = ["a","A","e","E","i","I","o","O","u","U"];
  var vowelBool = false;
  for (var i=0; i<vowelArray.length; i++){
    if (character===vowelArray[i]){
      vowelBool = true;
    }
  };
  return vowelBool;
};
var translate = function(string){
  var slicedString;
  if (isVowel(string[0])){
    return string + "ay";
  }
  else {
    if(string[0] === 'q' && string[1] === 'u') {
      slicedString = string.slice(3);
      slicedString = slicedString + "quay";
      return slicedString;
    } else {
      return output(string);
    };
  }
  };
var output = function(string) {
  var prefix = string.slice(0,findVowel(string));
  var suffix = string.slice(findVowel(string,-0));
  return suffix+prefix+"ay";
};
// var result = function() {
//   var consChar = findVowel(i);
// }
//var wordsTranslate = function(string) {
//  var word= string.split(' ').each(function(word) {
  //  translate();
  //});
//};
var translateWords = function(words){
  returnArray = []
  for (var i=0; i<words.length;i++){
    console.log("this is iteration"+i);
    returnArray.push(translate(words[i]));
  }
  return returnArray;
}



$(document).ready(function() {
$('h1').fadeIn(1400);


  $('form#pig-latin').submit(function(event) {
    event.preventDefault();
    var userInput = $('#userInput').val();
    var words = userInput.split(" ");
    words = translateWords(words);
    words = words.join(' ');
    $('h2').append(words).fadeIn();
  });
});
