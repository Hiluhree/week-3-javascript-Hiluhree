// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Division by zero";
    }
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to handle button clicks
document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const divideBtn = document.getElementById("divideBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");

    addBtn.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let result = add(num1, num2);
        document.getElementById("result").textContent = `Result: ${result}`;
    });

    subtractBtn.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let result = subtract(num1, num2);
        document.getElementById("result").textContent = `Result: ${result}`;
    });

    divideBtn.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let result = divide(num1, num2);
        document.getElementById("result").textContent = `Result: ${result}`;
    });

    multiplyBtn.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let result = multiply(num1, num2);
        document.getElementById("result").textContent = `Result: ${result}`;
    });
});
