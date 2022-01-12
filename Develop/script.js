var charset_initial = "";

var charset_Lowercase = function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
var charset_Uppercase = function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
var charset_Number = function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
var charset_Special = function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(charset_Lowercase());
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var charset_final = charset_initial;;
  var password_length = prompt("Enter Your password lenght between 6 to 20");


  var add_Lowercase = confirm ("Would you like to add Lowercase Character?");

  var add_Uppercase = confirm("Would you like to add Uppercase Character?");

  var add_Number = confirm("Would you like to add Number?");

  var add_Special = confirm("Would you like to add Special Character?");

  if (add_Lowercase == true && add_Uppercase == true && add_Number == true && add_Special == true) {
   var charset_final = charset_Lowercase() + charset_Uppercase() + charset_Number() + charset_Special();
  }

  if (add_Lowercase == true && add_Uppercase == true && add_Number == true && add_Special == false) {
    var charset_final = charset_Lowercase() + charset_Uppercase() + charset_Number();
  }
  if (add_Lowercase == true && add_Uppercase == true && add_Number == false && add_Special == false) {
    var charset_final = charset_Lowercase() + charset_Uppercase();
  }
  if (add_Lowercase == true && add_Uppercase == false && add_Number == false && add_Special == false) {
    var charset_final = charset_Lowercase();
  }
  if (add_Lowercase == false && add_Uppercase == false && add_Number == false && add_Special == false) {
    var charset_final = charset_initial;
  }
  return charset_final;

}



