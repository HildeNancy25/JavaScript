/* DIFFERENTS KINDS OF LOOPS:
  1. for
  2. for/in  for/Each  
  4. while
  5. do/while */

for( let h=1; h<=5; h++){
    console.log(h);
}  

// FOR IN (displays the whole items in an object)

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

for (let value0 in person){
    console.log(value0 + " = " +person[value0]);
}

// FOR EACH (this will display the values of the array) 

let colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
    console.log(color);
});

//  NESTED ARRAY (an array will be accessed by index)

let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(nestedArray[2][2]);

// NESTED OBJECTS 

let nestedObject = {
    name: "Nancy",
    workDone: "30%",

    address: {
        street: "123 Main St",
        city: "Kigali",
        zip: "10001"
    },
    contacts: {
        email: "nancy@gmail.com",
        phone: "+123-456-7890"
    }
};

console.log(nestedObject.workDone); 
console.log(nestedObject.address.city); 
// ANOTHER WAY TO ACCESS NESTED OBJECTS 
console.log(nestedObject['contacts']['email']);

// ANOTHER EXAMPLE 

let object ={
    citizen: {
        men: 10,
        women: 5,
    },
    house: {
        index: 100576,
        finished: "85%", 
    }
};

console.log(object.house.finished);

// Another array example 

let arr1 =[
    [4,8,2,4,1,],
    [9,50,5,9,86],
    [15,8,9,5,43]
];

let arr2 =[
    ["Hello",2,"me"],
    [28,99,"wait"],

];
console.log(arr2[1][2] + " ," + arr2[0][0] + " !");

// MEASURING THE SIZE OF ARRAY 

console.log(arr2.length);
console.log(arr1.length);

    // JAVASCRIPT Q&A

let clrs =["yellow", "green", "brown", "beige"];
clrs.push("orange"); // this will add another value to an existing array
console.log(clrs[4]);

clrs.pop();
console.log(clrs[3]);

let anotherclrs = clrs[0]; //accessing elements of another array
console.log(anotherclrs); 

let check = clrs.includes("orange"); // this will check if there is orange color in clrs array.
console.log(check);

// PRINTING THE EACH VALUE OF AN ARRAY

for(let i=0; i<clrs.length; i++){
    console.log(clrs[i]);
}

// OPERATIONS OF AN ARRAY

let numbers = [1, 2, 3, 4, 5];
let multiplication = numbers.map(num => num * 2);
console.log(multiplication);

let substraction = numbers.map(num => num - 2);
console.log(substraction);

let oddNumbers = numbers.filter(num => num % 2 !== 0); //this will filter all odd numbers from an array
console.log(oddNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

let positive = numbers.every(num => num > 8); // check if all numbers in an array are greater than 8 (the output will be boolean)
console.log(positive);

let indexOfClrs = clrs.indexOf("brown"); //finds the index of an given element
console.log(indexOfClrs);

// combine 2 arrays (concatenate)
let combinedArr = clrs.concat(arr1);
console.log(combinedArr);

/*THE OUTPUT WILL BE SOMRTHING LIKE THIS:
[
    'yellow',
    'green',
    'brown',
    'beige',
    [ 4, 8, 2, 4, 1 ],
    [ 9, 50, 5, 9, 86 ],
    [ 15, 8, 9, 5, 43 ]
  ]
  */

  