// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var inputLength = Number(prompt("Please enter your desired password length between 8-128 characters."));
    console.log(inputLength);
  // Input validation begin - This is working
      if ((inputLength >= 8) && (inputLength <= 128)) {
      var addChar = confirm("Please select OK to add special characters to your password.");
        console.log(addChar);
      var addNum = confirm("Please select OK to add numbers to your password.");
        console.log(addNum);
    } else {
      var quit = confirm("Invalid length. Please select OK to try again");
      if (quit === false) {
        return;
      } else {
        generatePassword();
      }
    }
      if (addChar || addNum) {
      var addUpp = confirm("Please select OK to add Uppercase letters to your password.");
        console.log(addUpp);
      var addLow = confirm("Please select OK to add Lowercase letters to your password.");
        console.log(addLow);
    } else {
        confirm("Please click OK to retry and add either Special Characters or Numbers to your password.");
        if (quit === false) {
        return;
      } else {
        generatePassword();
      }
    }
  // Input validation end - This is working

// var emptyString = "";
// var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// while (emptyString.length < 6) {
// emptyString += upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
// } 
// console.log(emptyString);

// var emptyString = "";
// var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";

// while (emptyString.length < 6) {
// emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
// } 
// console.log(emptyString);

// var specialCharString = "";
// var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// while (specialCharString.length < 6) {
// specialCharString += specialChar[Math.floor(Math.random() * specialChar.length)];
// } 
// console.log(specialCharString);

// var numString = "";
// var numbers = "0123456789";

// while (numString.length < 6) {
// numString += numbers[Math.floor(Math.random() * numbers.length)];
// } 
// console.log(numString);






  // var secPwd = "";

  // while (secPwd <= inputLength) {
  //   secPwd += 
  // }
} 

generatePassword();



  // Pseudocode
    // Gather user input on password requirements
      // how many characters in password 8 - 128 characters
      // Promt 2 - 
  
  // return "This is the generated password";

// Pseudocode
  // Gather user input on password requirements
    // input for # of characters
    // input for special characters
    // input for lowercase
    //inputt for uppercase
    // input for numbers 

  // Validate user input
    // num of characters between 8 and 128
    // what they answered true to include 
    
  // Decide how to choose what characters to include 
  // Randomly grab values from eachincludedd category 
  // Assemble password stringtot be returned

  // return "password string";