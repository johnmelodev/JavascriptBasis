// In the for loop, you already determine the end condition. In the while loop, you will figure out the moment to stop during the loop execution.
// Always include an exit condition to terminate the loop; otherwise, it will be infinite.

let condition = true;
while (condition === true) {
    let age = Number(prompt('Enter your age'));
    if (age < 18) {
        console.log('You are underage');
        condition = false;
    }
}
console.log('While loop ended');
