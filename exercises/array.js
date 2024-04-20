let names = []
let continueLoop = true
let position = 0

while (continueLoop === true) {
    let insertedName = prompt('Enter the student name');
    names[position] = insertedName;

    let continuePrompt = prompt('Do you want to continue? y/n')
    if (continuePrompt !== 'y') {
        continueLoop = false;
    }
    position++;
}
console.log(names);