// // Assignment Code
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
  var inputLength = Number(prompt("Please enter your desired password length between 8-128 characters."));
      if ((inputLength >= 8) && (inputLength <= 128)) {
      } else {
      var quit = confirm("Invalid length. Please select OK to try again.");
      if (quit === false) {
        return "Your Secure Password";
      } else {
        generatePassword();
      }}
      var addSpChar = confirm("Please select OK to add special characters to your password.");
      var addNum = confirm("Please select OK to add numbers to your password.");
      if (addSpChar || addNum) {
      } else {
      quit = confirm("Please click OK to retry and add either Special Characters or Numbers to your password.");
        if (quit === false) {
        return "Your Secure Password";
      } else {
        generatePassword();
      }}
      var addUpp = confirm("Please select OK to add Uppercase letters to your password.");
      var addLow = confirm("Please select OK to add Lowercase letters to your password.");
      if (addUpp || addLow) {
      } else {
      quit = confirm("Please click OK to retry and add either Upper Case or Lower Case Letters.");
      if (quit === false) {
          return "Your Secure Password";
      } else {
        generatePassword();
      }}
  var pwdOutput = "";
  var stringContainer = {
    upABC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    loABC: "abcdefghijklmnopqrstuvwxyz",
    nums: "0123456789",
    spChar: " !#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    emptyString: "",
  };
  if (addUpp && addSpChar && !addLow && !addNum) {
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.upABC.concat(stringContainer.spChar);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    }
    return pwdOutput;
    } else if (addUpp && addSpChar && addNum && !addLow) {
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.upABC.concat(stringContainer.nums, stringContainer.spChar, stringContainer.nums);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
      return pwdOutput;
    } else if (addUpp && addSpChar && !addNum && addLow) {
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.upABC.concat(stringContainer.spChar, stringContainer.loABC);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
    return pwdOutput;
    } else if (addUpp && !addSpChar && addNum && !addLow) {
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.upABC.concat(stringContainer.nums, stringContainer.nums);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
    return pwdOutput;
    } else if (addUpp && addNum && !addSpChar && addLow) {
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.upABC.concat(stringContainer.nums, stringContainer.loABC, stringContainer.nums);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
    return pwdOutput;
    } else if (addUpp && addNum && addSpChar && addLow) {
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.upABC.concat(stringContainer.nums, stringContainer.loABC, stringContainer.nums, stringContainer.spChar);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
    return pwdOutput;
    } else if (!addUpp && addNum && !addSpChar && addLow){
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.loABC.concat(stringContainer.nums, stringContainer.nums);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
    return pwdOutput;
    } else if (!addUpp && !addNum && addSpChar && addLow){
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.loABC.concat(stringContainer.spChar);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
    return pwdOutput;
    } else if (!addUpp && addNum && addSpChar && addLow){
    while (pwdOutput.length < inputLength) {
      stringContainer.emptyString = stringContainer.loABC.concat(stringContainer.nums, stringContainer.spChar);
      pwdOutput += stringContainer.emptyString[Math.floor(Math.random() * stringContainer.emptyString.length)];
    } 
    return pwdOutput;
    }} 

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