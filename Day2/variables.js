// Today am learning about Types of Variables 
let myname = "Nancy"; /* string variables */
let myinfo = "true"; /* boolean variables */
let myYear = "2024"; /* numeric variables */
let myarray = ["Today is",26,"february"]; /* array variables do not need double "
we use only yhe [] brackets*/

// Displaying the output

console.log("my name is " + myname + " and i have entered the " + myYear + " year!");

// output of an array 
console.log(myarray);

// Variable declaration 
var y;

// Variable declaration and assignment (variable declaration and definition) 
var a = "i assigned a variable"

// Understanding difference between var, let, const
var year = 2024;
const value = 20;
/* value = 30; assigning the variable "value" with another value will return 
the error because it was declared contant */

console.log("In " + year + " i will be having " + value + " more skills");

// using function to learn more about variables declaration 

/*function myFunction(country){
    let country = "Rwanda"; it can only be used within this funtion scope
    console.log(country);
} */

// Object data types 

/*object is a set of key pair variables (used to store more objecrts)

how objects are declared; */

/* let object ={
    team1{
        member : 10, (kuri objects we don't end with a semi-colomn)
        gender : "female",
    }
    team2{
        member : 27,
        gender : "male",
        state : false,
    }
}  !! do a search on how to declare a nested function !! */

// 1. primitive data Types: Number, string, boolean, null, undefined
// 2. objects data type: objects, array, function 

/* typeof: is used to tell the compiler tho show you the type of variable you called 
   How is used: console.log(typeof country);
*/

let person={
    fNames: "Nancy",
    lName: "Hilde",
}
// person = null;
console.log( typeof person);

/* NaN: Not a Number (when a variable is referencing an empty value 
   is used in a math operator or function.)*/

let str = "hello";
let age = 12;
console.log(str * age) /* ntabwo string ngo iraba recognized cs it is not a number 
                          so it will return NaN.*/

                        //nushyiramo boolean value, then it will return only the "age" value.


