// and
let condition1 = 2 === 2 && 3 === 3
console.log(condition1)

// or
let condition2 = 2 === 1 || 3 === 4
console.log(condition1)


let age = Number(prompt('Enter your age'));

let userName = prompt('Enter your userName');

// == equal | != not equal | < less than and > greater than | <= >= greater and less than or equal
// === equal in value and type | !== not equal in value and type!

if (age === 23 && userName === "John") {
    console.log("Your userName is John and you are 23 years old.");
} else if (age === 23 || userName === "John") {
    console.log("You are 23 years old OR your userName is John.");
} else {
    console.log('Your userName is not John and you are not 23 years old.');
}