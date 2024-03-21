let balance = 1000;
let highestValueInserted = 0;
let sumInsertedValues = 0;
let totalTransactions = 0;
let continueFlag = false;

do {
    const name = prompt("Enter your name:");
    const id = prompt("Enter your id:");
    const valueString = prompt("Enter the transaction value:");
    const value = Number(valueString);
    if (isNaN(value)) {
        console.log("Invalid value. The transaction was not performed.");
        continue;
    }
    const operation = prompt("What operation do you want to perform? (S for Withdrawal / D for Deposit)").toUpperCase();

    if (value < 0) {
        console.log("Invalid value. The transaction was not performed.");
    } else if (operation === "S" && value > balance) {
        console.log("Insufficient balance. The transaction was not performed.");
    } else if (operation === "S") {
        console.log(`Hello, ${name} (${id}), your current balance is $${balance}.`);
        balance -= value;
        totalTransactions++;
        sumInsertedValues += value;
        if (value > highestValueInserted) {
            highestValueInserted = value;
        }
        console.log(`Withdrawal successful. Your current balance is $${balance}.`);
    } else if (operation === "D") {
        console.log(`Hello, ${name} (${id}), your current balance is $${balance}.`);
        balance += value;
        totalTransactions++;
        sumInsertedValues += value;
        if (value > highestValueInserted) {
            highestValueInserted = value;
        }
        console.log(`Deposit successful. Your current balance is $${balance}.`);
    } else {
        console.log("Invalid operation. The transaction was not performed.");
    }

    const option = prompt("Do you want to continue? (1 to continue, 2 to stop):");
    if (option === "1") {
        continueFlag = true;
    } else if (option === "2") {
        continueFlag = false;
    } else {
        console.log("Invalid option. Program terminated.");
        continueFlag = false;
    }

} while (continueFlag);

console.log(`Final balance: $${balance}`);
console.log(`Highest value inserted: $${highestValueInserted}`);
console.log(`Average of inserted values: $${sumInsertedValues / totalTransactions}`);
