// CREATING VARIABLES
let yourname = prompt("Enter your name");
let age = parseInt(prompt("Enter your age"));
let weight = prompt("Enter your weight in kg");
let height = prompt("Enter your height in meters");
let profession = prompt("Enter your profession");

console.log("Hello " + yourname + ", you are " + age + " years old, weigh " + weight + " kg, and your profession is " + profession + ".");

// CHECKING AGE
if (age >= 18) {
    console.log("You're allowed to enter.");
} else {
    console.log("Sorry, you are underage.");
}

// CALCULATING FRACTIONAL AGE
let months = age * 12;
let weeks = age * 52;
let days = age * 365;

console.log("Your age in months is: " + months);
console.log("Your age in weeks is: " + weeks);
console.log("Your age in days is: " + days);
