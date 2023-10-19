"use strict"
// While Loop Exercise
    let i = 1;
let limit = 1
    while (i < 16) {
        i = i * 2
        limit = limit * 2
        console.log(limit);
    }

// Do While Loop Exercise
let allCones = Math.floor(Math.random() * 50) + 50;
    console.log("I must sell " + allCones + " cones to go home.");
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones > conesSold) {
        allCones -= conesSold
        console.log("I have sold " + conesSold + " cones.");
    } else if (allCones < conesSold) {
        console.log("Sorry, I can't sell you " + conesSold + "  because I only have " + allCones + " left for the day.");
    } else {
        console.log("I have sold all the cones, I can now go home, YAY!");
        allCones -= conesSold
    }
} while (allCones > 0)