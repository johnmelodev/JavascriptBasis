// let
// const
// var = does not respect the scope structure, preferable to use let

let age = Number(prompt('Enter your age'));

// == equal | != not equal | < less than and > greater than | <= >= greater and less than or equal
// === equal in value and type | !== not equal in value and type!

if (age <= 10) {
    console.log(age);
    let withinScope = 'John';
    console.log(withinScope);
    console.log('You are 10 years old or younger.');
    if (true) {
        console.log('I am in the third scope.');
        console.log(withinScope);
    }
} else {
    console.log('You are older than 10 years.');
}

console.log('Exited the if scope.');
console.log(withinScope);
