var charString = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "~!@#$%^&*()-_=+",
];

var userInput = [];

var passwordText = document.querySelector("#password");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  passwordText.value = generatePassword();
}

function generatePassword() {
  // var characterLength = 0
  // while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === false) {
  var characterLength = parseInt(
    prompt("How many characters would you like your password to be? (8-128)")
  );
  // }
  if (!characterLength || characterLength < 8 || characterLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return "";
  }

  var upper = false;
  var lower = false;
  var number = false;
  var symbol = false;

  while (!upper && !lower && !number && !symbol) {
    upper = confirm("Click OK to confirm uppercase characters");
    lower = confirm("Click OK to confirm lowercase characters");
    number = confirm("Click OK to confirm numeric characters");
    symbol = confirm(
      "Click OK to confirm special characters (~!@#$%^&*()-_=+)"
    );
  }
  // userInput is an array, push values into it.
  if (upper) {
    userInput.push(charString[0]);
  }

  if (lower) {
    userInput.push(charString[1]);
  }

  if (number) {
    userInput.push(charString[2]);
  }

  if (symbol) {
    userInput.push(charString[3]);
  }

  var password = "";

  // join all array elements into a single one, and then split in order
  // to get an array of characters
  userInput = userInput.join("").split("");

  // start statement at position 0, not 1
  for (var i = 0; i < characterLength; i++) {
    // Math.random is a function
    // Math.random() should be times userInput.length, so they should be inside the same parenthesis
    var index = Math.floor(Math.random() * userInput.length);
    password = password + userInput[index];
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
