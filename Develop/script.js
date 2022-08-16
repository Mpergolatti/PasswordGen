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

// Generate password function start and character length restrictions
var generatePassword = function() {
  var textSpace = "";
  var passCode = "";
  while (!passwordLength) {
    passwordLength = window.prompt("How many characters would you like your password to be?");
    passwordLength = parseInt(passwordLength);
    if (passwordLength > 128 || passwordLength < 8 || !passwordLength) {
      window.alert("Your password must be between 8 and 128 characters long.");
      passwordLength = 0;
    }
    
  }

  // Executing while loop for character customization
  while(!confirmLower && !confirmUpper && !confirmNum && !confirmSym) {
    confirmLower = window.confirm("Would you like to include LOWER CASE characters?");
    confirmUpper = window.confirm("Would you like to include UPPER CASE characters?");
    confirmNum = window.confirm("Would you like to include NUMBERS?");
    confirmSym = window.confirm("Would you like to include SYMBOLS?");
    
    if (confirmLower) {
      textSpace += lowerCase;
    }
    if (confirmUpper) {
      textSpace += upperCase;
    }
    if (confirmNum) {
      textSpace += numbers;
    }
    if (confirmSym) {
      textSpace += symbols;
    }
    if (!confirmLower && !confirmUpper && !confirmNum && !confirmSym)
    window.alert("Your Password must contain at least one of the character types");
  }

  // This executes the randomization of the variables at the top of the application.

  for (var i = 0; i < passwordLength; i++) {
    passCode += textSpace [Math.floor(Math.random() * textSpace.length)]
  }

  return passCode;

};


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