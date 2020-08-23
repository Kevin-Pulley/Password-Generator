
//Variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

//My Arrays
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "]", "[", ";", ","],
  upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Generate password function
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
  //If nothing entered into prompt, alerts.
  if (!enter) {
    alert("This needs a value");
    // else if prompt for numbers lower than 8 and higher than 128
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
    //Confirms for password criteria
  } else {
    confirmNumber = confirm("Do you want numbers in your password?");
    confirmCharacter = confirm("Do you want special characters in your password?");
    confirmLowercase = confirm("Do you want lowercase letters in your password?");
    confirmUppercase = confirm("Do you want UPPER CASE letters in your password?")
  };
  //Alerts if no cofirms are chosen
  if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmCharacter) {
    choices = alert("You must choose a criteria");
    //Start of else if's for 4 selections
  } else if (confirmUppercase && confirmLowercase && confirmNumber && confirmCharacter) {
    choices = character.concat(number, upperCase, lowerCase);

    //Start of else if's for 3 seletions
  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, lowerCase);

  } else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, upperCase);

  } else if (confirmNumber && confirmUppercase && confirmLowercase) {
    choices = number.concat(upperCase, lowerCase);

  } else if (confirmCharacter && confirmUppercase && confirmLowercase) {
    choices = character.concat(upperCase, lowerCase)

    //Start of else if's for 2 seletions

  } else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(upperCase);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(lowerCase);

  } else if (confirmUppercase && confirmLowercase) {
    choices = upperCase.concat(lowerCase);

  } else if (confirmUppercase && confirmNumber) {
    choices = upperCase.concat(number);

  } else if (confirmLowercase && confirmNumber) {
    choices = lowerCase.concat(numbers);

    //Start of else if's for 1 seletion
  } else if (confirmCharacter) {
    choices = character;

  } else if (confirmLowercase) {
    choices = lowerCase;

  } else if (confirmUppercase) {
    choices = upperCase;

  } else if (confirmNumber) {
    choices = number;

  }


  //Takes the choices selected and randomizes them by the length of choices selected.
  var userChoices = "";
  for (var i = 0; i < enter; i++) {
    userChoices = userChoices + choices[Math.floor(Math.random() * choices.length)]
  }

  //Puts the userChoices onto the screen.
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = userChoices;
}

function writePassword() {
  generatePassword();
}






















