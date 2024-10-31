// variables
let ourString = 'new string' // single quotes or double quotes for strings
let ourNumber = 5         // numbers
let ourBoolean = false     // booleans hold true or false
const bestNum = 69        // const makes variables unchangable

// array
let ourArray = [ourString, ourNumber, ourBoolean]
console.log(ourArray[0]) // this would be ourString
console.log(ourArray[1]) // this would be ourNumber
console.log(ourArray[2]) // this would be ourBoolean
console.log(ourArray)    // this logs out the whole array

ourString = 'poopy string' // sets previous string to something else

// if statements(conditionals)
if(ourString === 'poopy string'){
    console.log('ewwww')
}else{
    console.log('alls good smellin')
}

// else if statements
if(ourNumber === 5){
    console.log('its five')
}else if(ourNumber === 7){
    console.log('yooo, its seven')
}else{
    console.log('normal number yo')
}

// document selection example
let elementToChange = document.getElementById('changeme')
elementToChange.style.color = 'black'

// if statement with document selection example
if(ourBoolean === false){
    elementToChange.innerHTML = 'boolean is false!'
}else{
    elementToChange.innerHTML = 'boolean is true!'
}


// button example and function
let clickedNum = 0
function myFunc(){
    elementToChange.style.backgroundColor = "green"
    elementToChange.innerHTML = "My friend has been clicked!"
    console.log('I have been clicked! ' + clickedNum)
    clickedNum += 1
}

// creates variable for button element(superbutton)
let superButton = document.getElementById('superbutton')
superButton.addEventListener('click', myFunc)