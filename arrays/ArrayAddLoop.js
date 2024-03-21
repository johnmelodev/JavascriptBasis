// Initializing the array and control variable
let names = [];
let continueLoop = true;

// Initial position in the array
let arrayPosition = 0;

// Loop to add names to the array
while (continueLoop === true) {
    let insertedName = prompt("Enter a name:");
    names[arrayPosition] = insertedName;

    let continuePrompt = prompt("Do you want to continue? (y/n)");

    if (continuePrompt !== "y") {
        continueLoop = false;
    }
    arrayPosition++;
}

console.log(names);
