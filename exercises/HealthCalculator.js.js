// DISCOVERING BMI
let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal");
} else if (bmi >= 25 && bmi <= 30) {
    console.log("Overweight");
} else {
    console.log("Obesity");
}

// DISCOVERING THE YEAR OF BIRTH
let currentYear = 2023;
let birthYear = currentYear - age;
console.log("You were born in the year " + birthYear);

// DISPLAYING YEARS AND AGES
let yearLived = birthYear;
let currentAge = 0;

for (let yearLived = birthYear; yearLived <= currentYear; yearLived++) {
    console.log(yearLived + " - " + currentAge + " years old");
    currentAge++;
}

// DOWHILE LOOP
do {
    // INSERT PREVIOUS LOGIC
    let continueInput = prompt("Do you want to enter the data again? (y/n)");
} while (continueInput == "y");
