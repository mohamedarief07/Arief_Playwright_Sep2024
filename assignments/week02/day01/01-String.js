
// reversal program:
function Palindrome(originalName) {
    console.log("Original Name is " +originalName);
    let ispalindrome;
    let aftersplit = originalName.split();
    //console.log(aftersplit);

    let reversedName = '';
    for (let i = originalName.length - 1; i >= 0; i--) {
        reversedName = reversedName + originalName[i];

    }

    console.log("Reversed Name is " +reversedName);

    if (originalName === reversedName) {
        return console.log(`${originalName} is a palindrome`);
    } else {
        return console.log(`${originalName} is not a palindrome`);
    }

}
Palindrome("repaper");