function factorial(n) {
    // Initialize result variable
    var result = 1;
    // Compute factorial using a loop
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Example calls
console.log("Factorial of 5: ".concat(factorial(5))); // Output: Factorial of 5: 120
console.log("Factorial of 0: ".concat(factorial(0))); // Output: Factorial of 0: 1
console.log("Factorial of 10: ".concat(factorial(10))); // Output: Factorial of 10: 3628800
console.log("Factorial of -3: ".concat(factorial(-3))); // This should throw an error
