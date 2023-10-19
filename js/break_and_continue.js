function oddNumbers() {
    let userInput = prompt("Please enter an ODD number between 1 and 50.");
    for (let i = 0; i = 51; i++) {
        if(i % 2 !== 0) {
            console.log(i)
        }
        if (i === userInput) {
            console.log("Looks like we are skipping this one!");
            break;
        } continue;
    }
}