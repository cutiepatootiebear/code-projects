var ask = require('readline-sync')
var phrase = ask.question("Enter a phrase you would lke me to encryt?");
var shift = ask.questionInt('How many letters should the phrase shift?');

function ceasarCipher(str, shift) {
    var encryted = ""
    // declare a  var taht holds the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    //loop/iterate through the string
    for (i = 0; str.length; i++) {
        // check each letter
        if (alphabet.indexOf(str[i]) !== -1) {
            var crrentIndex = alphabet.indexOf(str[i])
            // shift it the appropriate amount to the right
            encryted += alphabet[(currentIndex + shift) % 26]
        } else {
            encryted += str[i]
        }
    }
    // return final encypted string
    return encryted
}
console.log(ceasarCipher(phrase, shift))