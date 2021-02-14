// Assignment code here
function generatePassword () {
  var passwordLength = window.prompt("How long would you like your password to be? Choose between 8 and 128.");
  console.log(passwordLength);

  if (passwordLength > 7 && passwordLength < 129) {
    window.alert("Your password will have " + passwordLength + " characters." );
  } 

  else generatePassword();



}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// the arryas of characters

var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numbers = ["123456789"]


