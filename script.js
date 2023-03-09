// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// // this creates teh function generatePassword
// function generatePassword() {
//   // this 
//  var length = prompt("enter the length of your password (between 8 and 128 characters):")

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// var generateBtn = document.querySelector("#generate");

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// 1. Define the characters the password can include- lowercase and uppercase letters, digits, and special characters.

// 2. Prompt the user for the desired length of the password. - donzooooo

// 3. Generate a random password of the desired length by randomly selecting characters from the set of characters defined in step 1.

// 4. Display the generated password to the user.

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = generatePassword();

// Write password to the #password input
function writePassword() {
    
    var passwordText = document.querySelector("#password");
    const characterslowerCase = "abcdefghijklmnopqrstuvwxyz"
    const charactersupperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charactersnumbers = "0123456789"
    const charactersspecialCharaacters = "!@#$%^&*()"

    let passwordLength = prompt("choose how long your password will be");
    if (passwordLength >= 8  && passwordLength <= 128) {
        alert("continue");
    } else {
        alert("pick between 8 to 128 characters");
    }

    let password =  generatePassword(passwordLength);
    console.log(password);

    passwordText.value = password;

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);