"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
let userInput = prompt("What is your favorite color?");
console.log(`the user entered: ${userInput}`);
alert(`Great ${userInput} is my favorite color too!`);
let littleMermaid = prompt("How many days do you wish to rent the The Little Mermaid?");
let brotherBear = prompt("How many days do you wish to rent Brother Bear?");
let hercules = prompt("How many days do you wish to rent Hercules?");
let cost = 3;
alert("Your cost is:" + ((littleMermaid * cost) + (brotherBear * cost) + (hercules * cost)));
let gPrice = 400;
let aPrice = 380;
let fPrice = 350;
let gHours = prompt("How many hours did you work for Google?");
let aHours = prompt("How many hours did you work for Amazon?");
let fHours = prompt("How many hours did you work for Facebook?");
alert(`Income earned is ${(gPrice * gHours) + (aPrice * aHours) + (fPrice * fHours)}`);