// strings for user confirmations
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "123456789"



// Assignment code here
function generatePassword () {
      var passwordLength = parseInt(window.prompt("How long would you like your password to be? Choose between 8 and 128."));
      console.log(passwordLength);
       //sets passwords length
      if (passwordLength > 7 && passwordLength < 129) {
        window.alert("Your password will have " + passwordLength + " characters." );
        //windows to confirm what characters to use. true or false.
        var  confirmSpecialCharacters = window.confirm("Would you like to include special characters in the password?");
        console.log(confirmSpecialCharacters);

        var  confirmNumbers = window.confirm("Would you like to use numbers in your password?");
        console.log(confirmNumbers);

        var confirmUppercase = window.confirm("Would you like to use uppercase letters?");
        console.log(confirmUppercase);

        var confirmLowercase = window.confirm("Would you like to use lowercase letters?");
        console.log(confirmLowercase);

        //userSelection stores characters user slected for password from above window.confirms
        var userSelection = []
        
        if (confirmSpecialCharacters) {
          userSelection += specialCharacters //if true on confirm window, pulls from corresponding string and adds to var user 
          console.log(userSelection);
        }

        if (confirmNumbers) {
          userSelection += numbers.split('') //if true on confirm window, pulls from corresponding string and adds to var user 
          console.log(userSelection);
        }

        if (confirmUppercase) {
          userSelection += upperCase.split('') //if true on confirm window, pulls from corresponding string and adds to var user 
          console.log(userSelection);
        }
        
        if (confirmLowercase) {
          userSelection += lowerCase.split('') //if true on confirm window, pulls from corresponding string and adds to var user 
          console.log(userSelection);
        }

        console.log(userSelection);

        var userPassword = ""

        for (var i = 0; i < passwordLength; i++) {
          userPassword = userPassword + userSelection[Math.floor(Math.random() * userSelection.length)];
        }

        return userPassword;

        
        



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




