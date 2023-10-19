"use strict"


let userInput = parseFloat(prompt("Please enter an ODD number between 1 and 50."));
let numbers = (userInput < 50 && userInput > 0 && (userInput % 2) !== 0);

while(numbers === false) {
    userInput = prompt("Invalid number! Number must be odd and between 1 and 50!");
    numbers = (userInput < 50 && userInput > 0 && (userInput % 2) !== 0);
    if (numbers === true) {
        break;
    }
}
console.log("We are skipping " + userInput);

for (let i = 1; i < 50; i++){
    if (i % 2 === 0) {
        continue;
    }
    if (userInput === i) {
        console.log("Looks like we are skipping " + i);
    } else{
        console.log("Odd Number is " + i);
    }
}
