// var, let, const

let firstName = 'Raza';
let lastName = 'Saleemi';

console.log(firstName + ' ' + lastName);

let age = 34;

console.log(age);

// firstName = camelCase
// FirstName = PascalCase
// first_name = underscore

age = age + 1;

console.log(age);

const x = 100; // constant value; can't reassign this

const arr = [1,2,3]; // this is array can't be reassigned but the values inside can be

console.log(arr);

arr.push(x); // this will push the value of x into the array

console.log(arr);

// similarly for constant JSON Object, the values inside can be changed
const jsonObject = {
    name: firstName + ' ' + lastName,
};

console.log(jsonObject);

// adding age inside the object
jsonObject.age = age;

console.log(jsonObject);

// Declare multiple value at once
let a,b,c;

const d=10, e=30, f=50;
