function checkNumber(number) {
    let result;

    if (number > 0) {
        result = "The number is positive.";
    } else if (number < 0) {
        result = "The number is negative.";
    } else {
        result = "The number is zero.";
    }

    return result;
}
console.log(checkNumber(5)); 
