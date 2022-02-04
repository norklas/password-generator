// Assignment code here

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

// Function to join all the user responses

function generatePassword() {
  let randomPassword = [""];
  let userChoice = [""];
  let passwordLength = window.prompt(
    "Please indicate a password length between 8 and 128."
  );

  // Determine if the password length is correct

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please input correct length");
    return generatePassword();
  }

  // Array of possible character choices

  // Numbers

  let numbers = window.confirm("Would you like to include numbers?");
  if (numbers) {
    userChoice.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }

  // Lowercase

  let lowerCase = window.confirm(
    "Would you like to include lowercase letters?"
  );
  if (lowerCase) {
    userChoice.push(
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    );
  }

  // Uppercase

  let upperCase = window.confirm(
    "Would you like to include uppercase letters?"
  );
  if (upperCase) {
    userChoice.push(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    );
  }

  // Special Characters
  let specialChar = window.confirm(
    "Would you like to include special characters?"
  );
  if (specialChar) {
    userChoice.push(
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~",
      "\\"
    );
  }

  // Conditional to make sure at least one condition is met
  if (!numbers && !upperCase && !lowerCase && !specialChar) {
    alert("Must choose at least one");
    return generatePassword();
  }

  // Loop until specified condition is false
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += userChoice[Math.floor(Math.random() * userChoice.length)];
  }

  return randomPassword;
}
