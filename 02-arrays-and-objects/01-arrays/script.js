//------- Array Basics ---------//
// Array Literal
const numbers = [1, 2, 3, 4, 5, 6, 7];

//Array Constructor
const fruits = new Array('apple', 'orange', 'grape');
console.log(fruits);

// Access by index
x = numbers[0];
console.log(x);

x = `My fav number is ${numbers[0]}`;
console.log(x);

// Length
console.log(numbers.length); // 7

// Inserting a new element
numbers[numbers.length] = 34;
console.log(numbers.length); // 8

//------- Array Methods ---------//
// Array Methods
numbers.push(100);
console.log(numbers);
console.log(numbers.length); // 9

numbers.pop();
console.log(numbers);
console.log(numbers.length); // 8

numbers.unshift(56); // Will be added to zero index
console.log(numbers);
console.log(numbers.length); // 9

numbers.shift(); // zero index element will be removed
console.log(numbers);
console.log(numbers.length); // 8

numbers.reverse(); // reverses the array
console.log(numbers);
console.log(numbers.length); // 8

let hasElement = numbers.includes(1); // if array has value then true
console.log(hasElement); // true

hasElement = numbers.includes(100);
console.log(hasElement); // false

let arr = [1, 2, 3, 4, 5, 6, 7];
let index = arr.indexOf(7); // Returns the index of the first occurrence of a value
console.log(index); // 6 (indexes start from 0)

index = arr.indexOf(8);
console.log(index); // -1 (Not found)

let slicedArray = arr.slice(2, 5); // take slice of array from index 2 to index before 5 (i.e. 4)
console.log(slicedArray); // [3, 4, 5] (Note: 3 is on index 2)

let deletedElements = arr.splice(2, 5); // Delete 5 elements starting from index 2
console.log(`arr = ${arr}`); // arr = 1,2
console.log(`deletedElements = ${deletedElements}`); //deletedElements = 3,4,5,6,7

//------- Array Nesting Concat & Spread ---------//

const arr1 = new Array('apple', 'orange', 'grape');
const arr2 = [1, 2, 3, 4, 5];
arr1.push(arr2);
console.log(arr1); // array within array

arr1.pop();
console.log(arr1); // poped arr2 content

// Nesting
let nestArr = [arr1, arr2];
console.log(nestArr); // nestArr is 2D array
console.log(nestArr[0]); // this gives us arr1
console.log(nestArr[0][0]); // this gives us first element of arr1

// Concat
let concatArr = arr1.concat(arr2);
console.log(concatArr); // ['apple', 'orange', 'grape', 1, 2, 3, 4, 5]

// Spread Operator (...)
console.log([...arr1, ...arr2]); // ['apple', 'orange', 'grape', 1, 2, 3, 4, 5]

// Flatten Arrays
arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();
console.log(x); // [1, 2, 3, 4, 5, 6, 7, 8]

// Static Methods
console.log(Array.isArray(arr)); // true
console.log(Array.from('12345')); // ['1', '2', '3', '4', '5']
console.log(Array.of(arr1, arr2)); // 2D array
