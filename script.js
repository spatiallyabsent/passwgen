// creating an array to place possible password items in
var allCharacters = {
  lowerChar: 'abcdefghijklmnopqrstuvwxyz',
  upperChar: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numChar: '0123456789',
  specialChar: '!@#$%^&*()_+'
};

// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var userSelected = '';
  // moved button to start of function so when pressed events take place
  var generateBtn = document.querySelector("#generate"); {
    // added user choices to window which will respond with true or false
    var userChoiceLowerChar = window.confirm('Do you want lowercase characters?');
    var userChoiceUpperChar = window.confirm('Do you want UPPERCASE characters?');
    var userChoiceNumChar = window.confirm('Do you want numbers?');
    var userChoiceSpecChar = window.confirm('Do you want special characters?');
    // adding an empty string which will place user choices into (note to self remember about empty strings. Another thing that took forever to figure out)
    // added '=== true' prior but removed after testing as userchoice options will activate true if true
    if (userChoiceLowerChar) {
      // note to selftook me forever to figure out the += remember for future reference
      userSelected += allCharacters.lowerChar;
      //console log for testing
      console.log(userSelected);
    }
    if (userChoiceUpperChar) {
      userSelected += allCharacters.upperChar;
      console.log(userSelected);
    }
    if (userChoiceNumChar) {
      userSelected += allCharacters.numChar;
      console.log(userSelected);
    }
    if (userChoiceSpecChar) {
      userSelected += allCharacters.specialChar;
      console.log(userSelected);
    }
    var passLength = window.prompt('Enter password length between 8 and 128 characters.');
    while (passLength < 8 || passLength > 128) {
      passLength = window.prompt('Invalit Length');
    }
    var password = generatePassword(userSelected, passLength);
    var passwordTextArea = document.querySelector('#password');
    passwordTextArea.value = password;
  }
  function generatePassword(userSelected, length) {
    var password = '';

//Cannot for the life of me figure out how to make sure that there is an element from each of the given choices within the password. come back to this later.

    for (var i = 0; i < length; i++) {
      var passIndex = Math.floor(Math.random() * userSelected.length);
      password += userSelected[passIndex];
}
    console.log(password);
    return password;
  }
}

