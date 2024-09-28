function moonLength(input)
{
let afterTrim=input.trim();
console.log(afterTrim);

let afterSplit=afterTrim.split(" ");
console.log(afterSplit);

let lastWord=afterSplit[afterSplit.length - 1];
console.log(lastWord+ " is the last word and its lenght is : "+lastWord.length);

}
let input = " fly me to the moon ";
moonLength(input);
