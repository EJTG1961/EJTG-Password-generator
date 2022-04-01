// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  var passwordText = document.querySelector('#password');
  passwordText.value = ' '
  var passwordLength = window.prompt(
    'Enter the length of your password ( 8 - 128 characters)'
  );
  console.log(passwordLength);

  if (passwordLength > 7 && passwordLength < 129) {
    window.alert(
    'Your password length is ' + passwordLength + '. Press OK to continue'
      );
     
      //ask if they want lower case letters
       var wantLower = confirm('Do you want to use lower case letters?')

      //ask if they want upper case letters
      var wantUpper = confirm('Do you want to use UPPER case letters?')

      //ask if they want numbers
      var wantNumbers = confirm('Do you want to use numbers?')

      //ask if they want special characters
      var wantSpecial = confirm('Do you want to use special characters?')

      // final password options
      var yourPasswordArray = []
      if (wantLower) {
        yourPasswordArray = yourPasswordArray.concat(lowercase)
      }
      if (wantUpper) {
        yourPasswordArray = yourPasswordArray.concat(uppercase)
      }
      if (wantNumbers) {
        yourPasswordArray = yourPasswordArray.concat(numberChars)
      }
      if (wantSpecial) {
        yourPasswordArray = yourPasswordArray.concat(specialChars)
      }
       console.log(yourPasswordArray)
       var word = '';

       //get target number (passwordLength ) of characters for (yourPasswordArray)
       for (let index = 0; index < passwordLength; index++) {
         // get random values from array
         word += yourPasswordArray[Math.floor(Math.random() * yourPasswordArray.length)];
       }
       return word;
      } else {
        window.alert(
          'Your password must be between 8 and 128 characters. Click ok and input a valid password'
        );
        generatePassword();
      }


  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
