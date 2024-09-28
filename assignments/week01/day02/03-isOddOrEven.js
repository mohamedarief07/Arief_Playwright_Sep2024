function isOddOrEven(number) {

    if (number % 2 === 0) {
        return "the number provided: " + number + " is a Even number";
    } else {
        return "the number provided: " + number + " is a ODD number";
    }
}


console.log(isOddOrEven(4));
console.log(isOddOrEven(7)); 
