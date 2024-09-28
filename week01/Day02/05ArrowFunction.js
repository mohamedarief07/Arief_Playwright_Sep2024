const greet_NOparameter = () => `Hello, Rohit`;

console.log(greet_NOparameter());

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Billa"));

const goat = (name) => {
    console.log("block of code1");
    console.log("block of code2");
    console.log("block of code3");
    console.log("block of code4");
   return `Hello, ${name}!`
}

console.log(goat("Jeevan"));