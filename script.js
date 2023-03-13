// Assignment code here - its on here 2x's ???????????
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // CALLING GENERATEPASSWORD FUNCTION- HAVE TO MAKE THAT AND DEFINE THAT : STORE VALUE FROM THAT FUNCTION IN PASSWORD VARIABLE
  var password = generatePassword();
  // CARD WHERE GENERATED PASSWORD DISPLAYS ON SCREEN
  var passwordText = document.querySelector("#password");
  // DISPLAYS THAT GENERATED PASSWORD ON SCREEN
  passwordText.value = password;
}
// Add event listener to generate button- WHEN USER 'CLICKS' GENERATE BUTTON - CALLS THE WRITEPASSWORD FUNCTION
generateBtn.addEventListener("click", writePassword);

// connecting html element #generate and asigning it to this generateButton
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChar = "0123456789"
var specialChar = "~!@#$%^&*()-_=+[{]}|,<.>?"


// here 
function generatePassword() {
  var validChars = []
  var newPassword = []
  var passwordLength = parseInt(prompt("choose a number between 8 and 128"));
  if (isNaN(passwordLength)) {
    alert("Must choose a number");
    return null;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number");
    return null;
  }

  // without these here they dont pop up in the box, SETS has_ variables
  var hasLower = confirm("Would you like lowercase letters in your password")
  var hasUpper = confirm("Would you like uppercase letters in your password")
  var hasNum = confirm("Would you Numbers in your password")
  var hasSpecChar = confirm("Would you like special sharacters in your")


  //  userChoics-  object storing user's selected password length and character type choices.
  // 4 boolian vars. and confirm method when user clicks yes var is true, otherwise set to false
  // will pull these into the generatepassword function to detwermin the char types chosen to include in the password 
  var userChoices = {
    passwordLength: passwordLength,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNum: hasNum,
    hasSpecChar: hasSpecChar
  }

  if (userChoices.hasLower == true) {


    validChars = validChars.concat(lowerCaseChar);
   
  if (userChoices.hasUpper == true) {
    validChars = validChars.concat(upperCaseChar);
  }
  if (userChoices.hasSpecChar) {
    validChars = validChars.concat(specialChar);
  }
  if (userChoices.hasNum) {
    validChars = validChars.concat(numberChar);
  }
  console.log(validChars.join(""));
var mashedValidChars = validChars.join("")
  for (let index = 0; index < userChoices.passwordLength; index++) {
    
    
    var x = Math.floor(Math.random() * mashedValidChars.length)
    newPassword.push(mashedValidChars[x]);
    console.log(newPassword)
  }
  return newPassword.join("")

}
}

