// scripts.js

// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        // Evaluate the expression and display the result
        document.getElementById('display').value = eval(expression);
    } catch (e) {
        // If there's an error (e.g., invalid expression), clear the display
        document.getElementById('display').value = 'Error';
    }
}
