//------- Primitive Types -----//
// Primitive Type - Stored in stack
// String
const firstName = 'Raza';
console.log(firstName, typeof(firstName));

// Number
const num = 12;
console.log(num, typeof(num));

// Boolean
const bool = true;
console.log(bool, typeof(bool));

// Undefined
let a;
console.log(a, typeof(a));

// Symbol
const id = Symbol('a');
console.log(id, typeof(id));

//------- Reference Types -----//

// Reference Types - Stored in Heap
// numbers will be a address in stack, pointing to array in heap
const numbers = ['a', 'b', 'c']; // Array

// person will be a address in stack, pointing to object in heap
let person = { name: 'John'}; // Object

function sayHello(){    // Function
    console.log('Hello');
}
output = sayHello;

console.log(output, typeof(output));

//------Object manipulation------//
// lets print person object
console.log('person object:', person);
let NewName = "Raza";
person.name = NewName;
console.log('person object after changing name to value in NewName', person);
NewName = 'Saleemi';
console.log('person object after changing value of NewName', person);
// the person object doesn't change because it was not referencing ..
// .. the name from NewName. The value was copied at that time.

// now if we make an other object and assign person to it
let anotherObject = person;
// now changing the name of this object
anotherObject.name = "anotherName";
console.log('person object after changing name of anotherObject', person);
// the person object was change because anotherObject was also referencing ..
// .. to the same object it the heap

//------Data type conversion------//
let amount = '100';

//string to number
let amountInt = parseInt(amount);
let amountInt2 = +amount;
let amountInt3 = Number(amount);

console.log(amount, typeof amount);
console.log(amountInt, typeof amountInt);
console.log(amountInt2, typeof amountInt2);
console.log(amountInt3, typeof amountInt3);

// number to string
let price = 100;
console.log('price', price, typeof price);
let stringPrice = String(price); // or price.toString()
console.log('String(price)', stringPrice, typeof stringPrice);

// string to float
// parseFloat('101.2') => 101.2

// parseInt('hello') => NaN


