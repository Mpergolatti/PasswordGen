// Assignment code here
var passwordLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+=-{}[]|?><,. ";

var confirmUpper = false;
var confirmLower = false;
var confirmNum = false;
var confirmSym = false;

var generatePassword = function() {
  var textSpace  = "";
  var passCode = "";
  while (!passwordLength) {
    passwordLength = window.prompt("How long password?")

    passwordLength = parseInt(passwordLength);

    if (passwordLength > 128 || passwordLength < 8 || !passwordLength) {
      window.alert("Your password must be more then X characters");
      passwordLength = 0;
    }
  }

    while (!confirmUpper && !confirmLower && !confirmNum && !confirmSym) {
      confirmUpper = window.confirm("Yes to capital");
      confirmLower = window.confirm("Yes to lowercase");
      confirmNum = window.confirm("yes for numbers");
      confirmSym= window.confirm("Yes for symbols");

    if (confirmUpper) {
      textSpace += upperCase;
    }

    if (confirmLower) {
      textSpace += lowerCase;
    }

    if (confirmNum) {
      textSpace += numbers;
    }

    if (confirmSym) {
      textSpace += symbols;
    }

    if (!confirmUpper && !confirmLower && !confirmNum && !confirmSym)
      window.alert("your password must include one or more types");
  }
 
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