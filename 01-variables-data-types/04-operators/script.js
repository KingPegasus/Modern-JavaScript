// Arithemitic Operators

let x = 5;
x = 5 + 5 - 5 * 2 / 1 % 4;
console.log(x, typeof x);

// Concatenation
x = "Hello" + ' ' + 'World';
console.log(x, typeof x);

// Exponent 
x = 2**3; // 8
console.log(x, typeof x);

//Decrement
x--; // x = x - 1
console.log(x, typeof x);

// Assignment Operators
x -= 5;
x += 5;
x /= 5;
x **= 5;

// Comparison Operators
x = 2 == '2'; // true
x = 2 === '2'; // false
x = 2 != 2; // false
x = 10 > 5; // 10

// Type Coercion
x = 5 + '5'; // '55' string
console.log(x, typeof x);

x = 5 * '5'; // 25 number
console.log(x, typeof x);

x = 5 + null; // 5 number
console.log(x, typeof x);

x = Number(true); // 1 number
console.log(x, typeof x);

x = 5 + undefined; // NaN number
console.log(x, typeof x);