// Assignment code here
function generatePassword() {
  console.log("button clicked")
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
  var chosenChar = []

  // 1. prompt the user for password criteria
  //  8 > 128 characters, lowercase, uppercase, numbers, special char
  var passwordLength = window.prompt("Between 8 and 128, how many characters do you want your password to have?")
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength >= 128) {
    window.alert("Your password must be between 8 and 128 characters!")
    generatePassword();
  }


  var lowercase = window.confirm("Do you want to use lowercase?")
  console.log(lowercase)
  if (lowercase == true) {
    console.log("lowercase")
  }


  var uppercase = window.confirm("Do you want to use uppercase?")
  console.log(uppercase)
  if (uppercase == true) {
    console.log("uppercase")
  }


  var numbers = window.confirm("Do you want to use numbers?")
  console.log(numbers)
  if (numbers == true) {
    console.log("numbers")
  }



  var specialchar = window.confirm("Do you want to use special characters?")
  console.log(specialchar)
  if (specialchar == true) {
    console.log("specialchar")
  }



  // 2. generate psswrd



  // 3. display psswrd
  return "Password will go here.";
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
