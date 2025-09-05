const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let output1El = document.getElementById("output-1")
let output2El = document.getElementById("output-2")
let lengthInputEl = document.getElementById("password-input")
let errorEl = document.getElementById("error-message")

function getRandomNumber(){
  return Math.floor(Math.random() * characters.length) 
}

function setLength (){
  if (lengthInputEl.value < 15 || lengthInputEl.value > 35){
    return 15
  }
  return lengthInputEl.value
}

function getPasswords (){
  
  let password1 = ""
  let password2 = ""

  for (let i = 0; i < setLength(); i++){
    password1 += characters[getRandomNumber()]
    password2 += characters[getRandomNumber()]
    
  }
  
  output1El.textContent = password1
  output2El.textContent = password2
}
