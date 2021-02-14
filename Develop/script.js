// the arryas of characters
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numbers = ["123456789"]



// Assignment code here
function generatePassword () {
  var passwordLength = window.prompt("How long would you like your password to be? Choose between 8 and 128.");
  console.log(passwordLength);
//sets passwords length
  if (passwordLength > 7 && passwordLength < 129) {
    window.alert("Your password will have " + passwordLength + " characters." );

    var  confirmSpecialCharacters = window.confirm("Would you like to include special characters in the password?");
    console.log(confirmSpecialCharacters);

    var  confirmNumbers = window.confirm("Would you like to use numbers in your password?");
    console.log(confirmNumbers);

    var confirmUppercase = window.confirm("Would you like to use uppercase letters?");
    console.log(confirmUppercase);

    var confirmLowercase = window.confirm("Would you like to use lowercase letters?");
    console.log(confirmLowercase);

    //user responses being fed into this array
    var userPassword = []
    
    if (confirmSpecialCharacters) {
      userPassword = specialCharacters //will go to userpassword variable
      console.log(userPassword);
    }

    if (confirmNumbers) {
      userPassword = numbers
      console.log(userPassword);
    }

    if (confirmUppercase) {
      userPassword = upperCase
      console.log(userPassword);
    }
    
    if (confirmLowercase) {
      userPassword = lowerCase
      console.log(userPassword);
    }



  } 

  else window.alert("Please pick a password length between 8 and 128 characters.");
  generatePassword();



  

  



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




