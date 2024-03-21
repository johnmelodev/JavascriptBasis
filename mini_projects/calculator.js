// Examples of how to use it:
// Calculator(5, 3, "+");   This will add 5 and 3
// Calculator(10, 2, "*");  This will multiply 10 and 2
// Calculator(8, 2, "e");   This will raise 8 to the power of 2 (8^2)

function Calculator(number1, number2, operator) {
    let result;
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "e":
            let counter = 1;
            result = num1 * num1;
            while (counter < num2 - 1) {
                result = result * num1;
                counter++;
            }
            break;
    }

    if (result === undefined || result > 1000000)
        result = "ERROR";

    return result;
}
