let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`; // Template literal


console.log(str3);

let text = "JavaScript";
console.log(text.length); // Outputs: 10

let char = text[0]; // 'J'
let charAt = text.charAt(1); // 'a'

console.log(charAt);

let upper = text.toUpperCase(); // 'JAVASCRIPT'
let lower = text.toLowerCase(); // 'javascript'
let sub = text.substring(0, 4); // 'Java'
let index = text.indexOf('Script'); // 4

console.log(index);

let name = "JavaScript";
let greeting = `Hello, ${name}!`; // 'Hello, JavaScript!'

console.log(name);
console.log(greeting);

let quote = "He said, \"JavaScript is awesome!\"";
let multiline = "This is line 1\nThis is line 2";

console.log(quote);
console.log(multiline);

let courseName="Playwright";
console.log(`The length of the string is ${courseName.length}`);
console.log(`The first character of the string is ${courseName.charAt(0)}`);

console.log(`The 2nd last character of the string is ${courseName.charAt(courseName.length-2)}`);






