// Declaring arrays that we will use
let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

// Declaring the function with the requested parameters
function FindCommonNumbers(arrayOne, arrayTwo) {
    let result = []; // Declaring array of common numbers
    let resultCounter = 0; // counter for this array

    // The first FOR loop goes through arrayOne
    for (let i = 0; i < arrayOne.length; i++) {
        // The second FOR loop goes through arrayTwo, for each number of arrayOne it
        // compares with all the numbers of arrayTwo
        for (let j = 0; j < arrayTwo.length; j++) {
            // If the comparison is successful it adds this number to the array of
            // common numbers and assigns the maximum value to the j counter thus ending
            // the verification for this number and avoiding duplicate numbers
            if (arrayOne[i] == arrayTwo[j]) {
                result[resultCounter] = arrayOne[i];
                resultCounter++;
                j = arrayTwo.length;
            }
        }
    }

    return result;
}

console.log(FindCommonNumbers(arrayA, arrayB));
