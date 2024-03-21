let names = []
let continueLoop = true
let position = 0

while (continueLoop === true) {
    let insertedName = prompt('insira o nome do aluno');
    names[position] = insertedName;

    let continuePrompt = prompt('quer continuar y/n')
    if (continuePrompt !== 'y') {
        continueLoop = false;
    }
    position++;
}
console.log(names);
