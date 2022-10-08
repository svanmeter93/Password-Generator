// First create a array with each kind of characters var "Characters" = [""]
// capital letters
const capitalLetters =["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// lowercase letters
const lowerLetters=["abcdefghijklmnopqrstuvwxyz"];
// special characters
const specialChar = ["~!@#$%^&*;()-_=+"];
// this function will generate a random number. Console logs the range
function rangeRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// make function a variable
const number = rangeRandom(0,9);
// combine all arrays together to create a single array

// -----------------------------------------
const characters = capitalLetters.concat(lowerLetters, number, specialChar);

// -----------------------------------------

// create a empty string for user's slelection
var userEntry = [];
// link to html for the user's entry HINT: find the id
var password = document.querySelector("#password");
// link to html generate password button
var generateBtn = document.querySelector("#generate");

//-----------------------------------------

function createPassword () {
    password.value = makePassword();
}
// ----------------------------------

// this funtion will display window prompt and ask how long of a password
function makePassword(){
// creat window prompt HINT: parseInt creates a sting into a number (if it can)
    var numberCharacter = parseInt(
        prompt("How many characters would you like to use? (8-128)"));
    //create if function to use user's entry 
    // translation = user must select a number-- 
    // bigger than 8 or a number less than 128
    // if not selected, alert message then return to question
    if (!numberCharacter || numberCharacter <8 || numberCharacter > 128) {
        alert("Password must be betweeen 8-128 characters");
        return"";
    }
    // at this part of the function it will weed out the characters not selected
    // create a boolean value that will be checked against userEntry
    var big = false;
    var low = false;
    var numbers = false;
    var special = false;
    
    while (!big && !low && !numbers && !special) {
    big = confirm("Click ok for uppercase letters");
    low = confirm("Click ok for lowercase letters");
    numbers = confirm("Click ok for numbers");
    special = confirm("Click ok for Special Characters (~!@#$%^&*()-_=+)"
    );
    }
    // if user confirmed these varibles will continute down the "if" functions below
    if (big) {
        userEntry.push(characters[0]);
    }

    if (low) {
        userEntry.push(characters[1]);
    }

    if (numbers){
        userEntry.push(characters[2]);
    }

    if (special){
        userEntry.push(characters[3]);
    }

    var password = "";

    userEntry = userEntry.join("").split("");
    // funtion to finalize product
    for (var i = 0; i < numberCharacter; i++) {
        var index = Math.floor(Math.random() * userEntry.length);
        password = password + userEntry[index];
    }

return password;

}

// -----------------------------------------


// function that determines the number of characters HINT= use pasreINT
// parseInt converts string into number.
// function numberCharacter = 

// Math.random() creates a random number 0 - 9

// parseInt
generateBtn.addEventListener("click", createPassword);