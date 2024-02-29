// ARRAYS Declaration

let myArray = [1, 5, 10];
let Names = ["Nancy", "Hilde"];

// ACCESSING ARRAYS (the initial value has the [0])

let otherNames = Names[1];
console.log(otherNames);

// ACCESSING ARRAYS USING LOOPS 

// for
for ( let i=50; i>=12; i--){
    console.log(myArray[2] * i)
}

// for each 

/* myArray.forEach(function(myArray) {
     console.log(myArray);                            the forEach !!!!!!!
} */

// Functions declaration and call

function funct1(f1){
    console.log(f1);
};
funct1("Nancy");

//arrow functions: are used to write a single line function (minimal or simple) 

const calc =(firstNum , secondNum , ThirdNum) => {
    return firstNum + secondNum * ThirdNum;
};
console.log(calc(85, 74, 2));


let calc2 = (divide) => divide + divide;
console.log(calc2(90)); 

// brackets can be omitted (when we have more variables we can't omit the brackets)
let calc1 = main => {
    return main - 6;
};
console.log(calc1(29));

// another example

var data = (money, income, spendings) => {
   return income * spendings / money;
};
console.log(data(2680, 20000, 8465));

//  difference between return and console 

/* return is used to send a value back from a function to its caller, 
    while console.log() is used to log messages and values 
    to the console during the execution of a program for debugging or informational purposes. */

function payments(x,y,a){
    let pay = 0;
    for( let i=1; i<=4; i++){
        pay += payments[i];
        
    }
    return pay;
}; 
payments(204,57,64);

