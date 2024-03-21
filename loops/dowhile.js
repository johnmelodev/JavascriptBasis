// The difference is that in do...while loop, it executes and for example prints at least once before ending.

let age;
do {
    age = Number(prompt('Enter your age'));
    console.log(age);
} while (age > 18);

console.log('You are underage');
