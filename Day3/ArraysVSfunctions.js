// ARRAYS Declaration

let myArray = [1, 5, 10];
let Names = ["Nancy", "Hilde"];

// ACCESSING ARRAYS (the initial value has the [0])

let otherNames = Names[1];

// ARRAYS IN LOOPS 

var i;
for (i=50; i<=2; i--){
    console.log(myArray[2] * i)
}

// Functions declaration and call

function funct1(f1){
    console.log(f1);
};
funct1("Nancy");

// operations in functions 
let array =[2, 4, 6, 8, 10]
function sumArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let total = sumArr(numbers); // this will return the sum of all items in an array calculated in the function


//  difference between return and console 

/* Return ikoreshwa to exit a function (this means that where ever you put a return parameter, the function stops executing)
   console idufasha for debugging */


