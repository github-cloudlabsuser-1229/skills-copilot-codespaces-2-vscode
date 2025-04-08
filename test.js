// Calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Main calculator logic
function calculator() {
    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Quit");

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askQuestion(query) {
        return new Promise(resolve => readline.question(query, resolve));
    }

    async function start() {
        while (true) {
            const choice = await askQuestion("Enter your choice (1/2/3/4/5): ");

            if (choice === '5') {
                console.log("Thanks for using the calculator. Goodbye!");
                readline.close();
                break;
            }

            const num1 = parseFloat(await askQuestion("Enter the first number: "));
            const num2 = parseFloat(await askQuestion("Enter the second number: "));

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid input! Please enter numeric values.");
                continue;
            }

            switch (choice) {
                case '1':
                    console.log(`Result: ${add(num1, num2)}`);
                    break;
                case '2':
                    console.log(`Result: ${subtract(num1, num2)}`);
                    break;
                case '3':
                    console.log(`Result: ${multiply(num1, num2)}`);
                    break;
                case '4':
                    console.log(`Result: ${divide(num1, num2)}`);
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    }

    start();
}

// Run the calculator
calculator();