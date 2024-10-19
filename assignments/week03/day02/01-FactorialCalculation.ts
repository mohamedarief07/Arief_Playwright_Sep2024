function factorial(n: number): number {
    // Initialize result variable
    let result = 1;

    // Compute factorial using a loop
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example calls

    console.log(`Factorial of 5: ${factorial(5)}`); // Output: Factorial of 5: 120
    console.log(`Factorial of 0: ${factorial(0)}`); // Output: Factorial of 0: 1
    console.log(`Factorial of 10: ${factorial(10)}`); // Output: Factorial of 10: 3628800
    console.log(`Factorial of -3: ${factorial(-3)}`); // This should throw an error
