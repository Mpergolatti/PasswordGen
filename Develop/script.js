// variables for password combination
var passwordLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+=-{}[]|?><,. ";

// confirmation variables
var confirmUpper = false;
var confirmLower = false;
var confirmNum = false;
var confirmSym = false;

// Generate password function start
var generatePassword = function() {
  var textSpace = "";
  var passCode = "";
  while (!passwordLength) {
    passwordLength = window.prompt("How many characters would you like your password to be?");
    passwordLength = parseInt(passwordLength);
    if (passwordLength > 128 || passwordLength < 8 || !passwordLength) {
      window.alert("Your password must be between 8 and 128 characters long.");
      passwordLength = 0;
    } else {
      break;
    }
  }

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