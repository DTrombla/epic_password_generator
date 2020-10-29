// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z',];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '.', '!', '@', '#', '$', '%', '^', '&', '*', '.', '!', '@', '#', '$', '%', '^', '&', '*',]; 
var forNaN = ["NaN"]
// Write password to the #password input
function writePassword() {
  var list = [""]
  var input = prompt("Enter your desired password length. Minimum of 8 characters. Maximum length of 128 characters.")
  if(isNaN(input)){
    list = list.concat(forNaN);
    alert("NUMBERS ONLY!")
  }
  if (input>128 || input< 8){
    alert("Please enter a number between 8 and 128, or equal to 8 or 128")  
  }
  else if(input<129 && input>7){
    if(confirm("Include Lower Case?")){
      list = list.concat(letters);
    }
    if(confirm("Include Upper Case?")){
      list = list.concat(upperLetters);
    } 
    if(confirm("Include Numbers?")){
      list = list.concat(numbers);
    }
    if(confirm("Include Special Characters?")){
      list = list.concat(symbols);
    }
  }
  if(list == "" && input<129 && input>7){
    alert("Please include at least one form of character")

  }
  
  var password = ""
  for(i = 0; i < input; i++){
    password = password + list[Math.floor(Math.random()*list.length)]
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(list)
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
