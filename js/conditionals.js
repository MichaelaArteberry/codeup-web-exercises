"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//function analyzeColor(color){
 //   if(color === 'blue'){
   //     return "Blue is the color of the Ocean.";
 //   } else if(color === 'red'){
  //      return "Red is the color of cherries";
   // } else {
     //   return "I do not know anything by that color " + color;
    //}
//}
//console.log(analyzeColor('blue'));
//console.log(analyzeColor('red'));
//console.log(analyzeColor('yellow'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//function analyzeColor(randomColor){
  //  if(typeof randomColor === 'blue'){
    //    return "Blue is the color of the Ocean.";
  //  } else if(typeof randomColor === 'red'){
    //    return "Red is the color of cherries";
   // } else {
     //   return "I do not know anything by that color " + randomColor;
  //  }
//}
//console.log(randomColor);
//console.log(randomColor);
//console.log(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//function analyzeColor(color) {
//     switch (analyzeColor) {
//         case "blue":
//             console.log("Blue is the color of the ocean!");
//             break;
//         case "red":
//             console.log("Red is the color of cherries!");
//             break;
//         default:
//             console.log("I dont know any other color references at the moment...");
//             break;
//     }
//}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let analyzeColor = prompt("What is your favorite color?").toLowerCase();
    switch(analyzeColor) {
        case "blue":
            alert("Blue is the color of the ocean!");
            break;
        case "red":
            alert("Red is the color of cherries!");
            break;
        default:
            alert("I dont know any other color references at the moment...");
            break;
    }


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, amount) {
    let discountPercentage = 0;
    if (luckyNumber === 1) {
        discountPercentage = .1;
    } else if (luckyNumber === 2) {
        discountPercentage = .25;
    } else if (luckyNumber === 3) {
        discountPercentage = .35;
    } else if (luckyNumber === 4) {
        discountPercentage = .5;
    } else if (luckyNumber === 5) {
        discountPercentage = 1;
    } else {
        discountPercentage = 0;
    }

    console.log(`Your lucky number is ${luckyNumber}, and your percentage discount is ${discountPercentage}.`);
    return amount - (discountPercentage * amount);
}
function calculateTotalObjectReturned(luckyNumber, amount) {
    let discountPercentage = 0;
    if (luckyNumber === 1) {
        discountPercentage = .1;
    } else if (luckyNumber === 2) {
        discountPercentage = .25;
    } else if (luckyNumber === 3) {
        discountPercentage = .35;
    } else if (luckyNumber === 4) {
        discountPercentage = .5;
    } else if (luckyNumber === 5) {
        discountPercentage = 1;
    } else {
        discountPercentage = 0;
    }
    console.log("Your discount Percentage is: " + discountPercentage);
    return {
        newAmount: amount - (discountPercentage * amount),
        luckyNumber,
        originalAmount: amount,
        discountPercentage,
        discountAmount: (discountPercentage * amount)
    }
}

console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
 const luckyNumber = Math.floor(Math.random() * 6);

let totalBill = prompt("What total bill to use ?", "100");
totalBill = Number(totalBill);
if (isNaN(totalBill) || totalBill === null || totalBill <= 0) {
    alert("You didn't enter a valid amount. Using 100 for default.");
    totalBill = 100;
}
let totalRandomDiscount = calculateTotal(luckyNumber, Number(totalBill));
alert(`Your lucky number ${luckyNumber} gave you a discount! Your new price is ${totalRandomDiscount.toFixed(2)}, congrats!`);

console.log(calculateTotalObjectReturned(luckyNumber, 55));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let confirmResponse = confirm("Please enter a number.");

if (confirmResponse) {
    let aNumber = prompt("What is the number you wish to enter?", "22");
    if (!isNaN(aNumber) && aNumber != null && aNumber != '') {
        alert(`The number isEven(${aNumber}) returned ${isEven(aNumber)}`);
        alert(`The number addOneHundred(${aNumber}) returned ${addOneHundred(aNumber)}`);
        alert(`The number positiveOrNegative(${aNumber}) returned ${positiveOrNegative(aNumber)}`);
    } else {
        alert("You have not entered a valid number.");
    }
}
function isEven(num) {
    return (Number(num) % 2 === 0);
}
function addOneHundred(num) {
    return Number(num) + 100;
}
const askForConfirm = () => {
    return confirm(`Would you like to add a number?`);
}
const evaluateNumber = (aNumber) => {
    alert(`The number is Even (${ aNumber}) returned ${isEven(aNumber)}`);
    alert(`The number addOneHundred(${ aNumber}) returned ${addOneHundred(aNumber)}`);
    alert(`The number positiveOrNegative(${ aNumber}) returned ${positiveOrNegative(aNumber)}`);
}