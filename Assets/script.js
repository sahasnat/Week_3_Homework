// Array of Lowercase Characters
var charset_Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of Uppercase Characters
var charset_Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array of numberical characters
var charset_Number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of Special characters
var charset_Special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];


// console.log(charset_Lowercase);
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

function passwordSelections() {

  var password_length = Number(prompt("Enter Your password length between 8 to 128"));

  var add_Lowercase = Number(confirm ("Would you like to add Lowercase Character?"));

  var add_Uppercase = Number(confirm("Would you like to add Uppercase Character?"));

  var add_Number = Number(confirm("Would you like to add Number?"));

  var add_Special = Number(confirm("Would you like to add Special Character?"));

  // Return an array of the values given by the user in the prompt and confirms
    return [
      password_length,
      add_Lowercase,
      add_Uppercase,
      add_Number,
      add_Special,
    ];

}

function generatePassword() {
  // password array to be populated with all characters
    password = [];

  // create a new array to join set of values
    var charset_Initial = [];


  // set local variables with values from the passwordSelections function
  promptOrConfirmValues = passwordSelections();
  password_length = promptOrConfirmValues[0];
  add_Lowercase = promptOrConfirmValues[1];
  add_Uppercase = promptOrConfirmValues[2];
  add_Number = promptOrConfirmValues[3];
  add_Special = promptOrConfirmValues[4];

  // Add values into new array based on selections

   if (add_Lowercase == true && add_Uppercase == true && add_Number == true && add_Special == true) {
    var charset_Initial = charset_Lowercase + charset_Uppercase + charset_Number + charset_Special;
   }
 
   if (add_Lowercase == true && add_Uppercase == true && add_Number == true && add_Special == false) {
     var charset_Initial = charset_Lowercase + charset_Uppercase + charset_Number;
   }
   if (add_Lowercase == true && add_Uppercase == true && add_Number == false && add_Special == false) {
     var charset_Initial = charset_Lowercase + charset_Uppercase;
   }
   if (add_Lowercase == true && add_Uppercase == false && add_Number == false && add_Special == false) {
     var charset_Initial = charset_Lowercase;
   }
   if (add_Lowercase == false && add_Uppercase == true && add_Number == true && add_Special == true) {
    var charset_Initial = charset_Uppercase + charset_Number + charset_Special;
   }
   if (add_Lowercase == true && add_Uppercase == false && add_Number == true && add_Special == true) {
    var charset_Initial = charset_Lowercase + charset_Number + charset_Special;
   }
   if (add_Lowercase == true && add_Uppercase == true && add_Number == false && add_Special == true) {
    var charset_Initial = charset_Lowercase + charset_Uppercase + charset_Special;
   }
   if (add_Lowercase == false && add_Uppercase == false && add_Number == true && add_Special == true) {
    var charset_Initial = charset_Number + charset_Special;
   }
   if (add_Lowercase == false && add_Uppercase == false && add_Number == false && add_Special == true) {
    var charset_Initial = charset_Special;
   }
   if (add_Lowercase == false && add_Uppercase == true && add_Number == false && add_Special == false) {
    var charset_Initial = charset_Uppercase;
   }
   if (add_Lowercase == false && add_Uppercase == false && add_Number == true && add_Special == false) {
    var charset_Initial = charset_Number;
   }
   if (add_Lowercase == false && add_Uppercase == false && add_Number == false && add_Special == true) {
    var charset_Initial = charset_Special;
   }
   if (add_Lowercase == false && add_Uppercase == true && add_Number == true && add_Special == false) {
    var charset_Initial = charset_Uppercase + charset_Number;
   }
   if (add_Lowercase == false && add_Uppercase == true && add_Number == false && add_Special == true) {
    var charset_Initial = charset_Uppercase + add_Special;
   }
   if (add_Lowercase == true && add_Uppercase == false && add_Number == true && add_Special == false) {
    var charset_Initial = charset_Lowercase + charset_Number;
   }
   if (add_Lowercase == true && add_Uppercase == false && add_Number == false && add_Special == true) {
    var charset_Initial = charset_Lowercase + add_Special;
   }
  // if users don not use any selection exit without generating password and asking to add selectin next time
   if (add_Lowercase == false && add_Uppercase == false && add_Number == false && add_Special == false) {
     prompt("you must select at least one character type");
   }
// check that the password is between 8 and 128 characters

if (password_length <8 || password_length >128) {
  prompt("This is not a valid value, Please enter desired passward length between 8 and 128"); // handle error for password length
} else {
  for (var i=0; i<password_length; i++) { 
    password.push(charset_Initial[Math.round(Math.random() * charset_Initial.length)]); 

  }
}

// check for lower case
if (add_Lowercase == true){
  for (var i=0; i<password.length; i++) {
    password[i] = password[i]; 
  }
}

// check for upper case
if (add_Uppercase == true) {
  for (var i =0; i<Math.floor(password.length/4); i++) { 
    upperCaseReplaceIndex = Math.floor(Math.random() * charset_Uppercase.length);
    PasswordReplaceIndex = Math.floor(Math.random() * password.length); 
    password[PasswordReplaceIndex] = charset_Uppercase[upperCaseReplaceIndex]; 
  }

}

 // check that the password includes numbers
 if (add_Number == true) {

  for (var i =0; i<Math.floor(password.length/4); i++) {
    numReplaceIndex = Math.floor(Math.random() * charset_Number.length);
    PasswordReplaceIndex = Math.floor(Math.random() * password.length); 
    password[PasswordReplaceIndex] = charset_Number[numReplaceIndex]; 
    }
 }
   // check that the password includes specials
 if (add_Special == true) {

  for (var i =0; i<Math.floor(password.length/4); i++) {
    specialReplaceIndex = Math.floor(Math.random() * charset_Special.length); 
    PasswordReplaceIndex = Math.floor(Math.random() * password.length); 
    password[PasswordReplaceIndex] = charset_Special[specialReplaceIndex]; 
  }
 }
 return password.join(""); 
}