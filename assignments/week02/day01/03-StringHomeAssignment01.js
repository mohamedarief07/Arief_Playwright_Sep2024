function lengthOfLastWord(input) {
    let afterSplit = input.split(" ");

    let lastWord = afterSplit[afterSplit.length - 1];
    
    return lastWord+ " is the last word and its lenght is : "+lastWord.length;
}

let input = "Hello World";
console.log(lengthOfLastWord(input)); 
