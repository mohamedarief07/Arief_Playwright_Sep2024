//1. String

let text=`Hello Sunday`;
let chromeVersion = `125.0.6422.142`;
console.log(text +"--> ("+typeof text+")");
console.log(chromeVersion +"--> ("+typeof chromeVersion+")");

//2. Number

let age = 25;
let pi = 3.14;
let androidVersion = 13.2;
let negativeNumber=-784.0232434545454544;

console.log(age +"--> ("+typeof age+")");
console.log(pi +"- ("+typeof pi+")");
console.log(negativeNumber +"- ("+typeof negativeNumber+")");


//3. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber +"- ("+typeof bigNumber+")");


//4. Boolean
let isJavaScriptFun = true;
let isSkyGreen = false;
console.log(isJavaScriptFun +"- ("+typeof isJavaScriptFun+")");
console.log(isSkyGreen +"- ("+typeof isSkyGreen+")");

//5. Undefined
let x;
console.log(x +"- ("+typeof x+")");
x=150;
console.log(x +"- ("+typeof x+")");

x=950;
console.log(x +"- ("+typeof x+")");

//6. Null
let y = null;
console.log(y +"- ("+typeof y+")");

y=151;
console.log(y +"- ("+typeof y+")");

y=951;
console.log(y +"- ("+typeof y+")");




