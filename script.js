// String methods
const str = 'Hello, World!';
document.getElementById('stringMethods').innerHTML = `
    Length: ${str.length} <br>
    Uppercase: ${str.toUpperCase()} <br>
    Lowercase: ${str.toLowerCase()} <br>
    Substring: ${str.substring(0, 5)} <br>
    Index of 'World': ${str.indexOf('World')} <br>
`;

// Number methods
const num = 42.5678;
document.getElementById('numberMethods').innerHTML = `
    To Fixed (2 decimal places): ${num.toFixed(2)} <br>
    Exponential notation: ${num.toExponential()} <br>
    Precision (4): ${num.toPrecision(4)} <br>
    Square root: ${Math.sqrt(num)} <br>
    Random number between 0 and 1: ${Math.random()} <br>
`;

// Array methods
const arr = [1, 2, 3, 'four', 'five'];
document.getElementById('arrayMethods').innerHTML = `
    Length: ${arr.length} <br>
    Join: ${arr.join(', ')} <br>
    Pop last element: ${arr.pop()} <br>
    Push 'six': ${arr.push('six')} <br>
    Reverse: ${arr.reverse()} <br>
`;

// Date methods
const now = new Date();
document.getElementById('dateMethods').innerHTML = `
    Current date: ${now.toLocaleDateString()} <br>
    Current time: ${now.toLocaleTimeString()} <br>
    Day of the week: ${now.getDay()} <br>
    Date + 3 days: ${new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()} <br>
    Difference in milliseconds: ${now - new Date('2023-01-01')} <br>
`;

// Function methods
function greet(name) {
    return `Hello, ${name}!`;
}

function multiply(x, y) {
    return x * y;
}

function calculateSquareRoot(number) {
    return Math.sqrt(number);
}

const functionOutput = document.getElementById('functionMethods');

functionOutput.innerHTML = `
    Function name (greet): ${greet.name} <br>
    Function arguments (greet): ${greet.length} <br>
    <br>
    greet('Alice'): ${greet('Alice')} <br>
    greet('Bob'): ${greet('Bob')} <br>
    <br>
    Function name (multiply): ${multiply.name} <br>
    Function arguments (multiply): ${multiply.length} <br>
    <br>
    multiply(3, 5): ${multiply(3, 5)} <br>
    multiply(2, 4): ${multiply(2, 4)} <br>
    <br>
    Function name (calculateSquareRoot): ${calculateSquareRoot.name} <br>
    Function arguments (calculateSquareRoot): ${calculateSquareRoot.length} <br>
    <br>
    calculateSquareRoot(9): ${calculateSquareRoot(9)} <br>
    calculateSquareRoot(25): ${calculateSquareRoot(25)} <br>
`;