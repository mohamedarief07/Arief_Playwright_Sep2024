
function reverseString(input) {

    let char = input.split('');
    let accumulator = '';

    for (let i = char.length - 1; i >= 0; i--) {
        accumulator += char[i];
    }

    return accumulator;
}

let input = "Testleaf";
console.log(reverseString(input));  
