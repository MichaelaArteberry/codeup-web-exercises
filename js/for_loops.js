// First xercise
const number = 5;

for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

// Second Exercise
for(let i = 0; i < 11; i++) {
    const randomNumber = Math.floor(Math.random() * (200 - 20 +1) + 20);

    if(randomNumber % 2 == 0) {
    console.log(randomNumber + " is even");
        } else {
        console.log(randomNumber + " is odd");
    }
}
// Third Exercise
function numberPyramid(totalNumberOfRows) {
    let output = '';
    for (let i = 1; i < totalNumberOfRows; i++) {
        output += '\n'.padStart(i + 1, i);
    }
    console.log(output);
}
numberPyramid(10);

// Last Exercise
function decreaseByFive()  {
    let startNumber = 105;
    for (let i = 0; i <= 20; i++){
        startNumber -= 5;
        console.log(startNumber);
    }
}
decreaseByFive();