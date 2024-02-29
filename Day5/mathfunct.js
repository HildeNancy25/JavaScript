// MATHEMATIC FUNCTIONS 

// The mathematics functions uses a built-in function "Math" followed by the property then the mathematical 

let x = Math.PI;
let num = -2;
console.log(x)
console.log(Math.abs(num)); // this will output only the positive number when you entered a negative number

let num1 = 8.6;
console.log(Math.ceil(num1)); //this will round the decimal up to the nearest intergers no matter if the decimal is < or > 5
console.log(Math.random());  //this will just display the random decimal between 0-1
console.log(Math.round(num1)); // this will round down when the decimal number are <5
console.log(Math.floor(num1)); // this wil don't care about the decimal it just take the value of the integer in front of decimals
 
// max and min

let sample = 90, sample1 = 8456, sample2 = 5742;
console.log(Math.max(sample, sample1, sample2));
console.log(Math.min(sample, sample1, sample2));

// square and power

let pwr = 3;
console.log(Math.sqrt(sample));
console.log(Math.pow(sample,pwr));

// sin, cos, tan, log, exp 

console.log(Math.sin(sample));
console.log(Math.cos(sample));
console.log(Math.tan(sample));

console.log(Math.log(sample));
console.log(Math.exp(pwr));




