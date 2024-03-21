// Creating an array
let fruits = ["Apple", "Banana", "Mango"];

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango

// Modifying an array element
fruits[1] = "Strawberry";
console.log(fruits); // Output: ["Apple", "Strawberry", "Mango"]

// Adding an element to the array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Strawberry", "Mango", "Orange"]
// or
// fruits[3] = ("Orange")


// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Strawberry", "Mango"]

// Checking the number of elements in the array
console.log(fruits.length); // Output: 3
