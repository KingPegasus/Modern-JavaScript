const num = 5;
console.log(num, typeof num);

num2 = new Number(5);
console.log(num2, typeof num2);

let x;
x = num.toString();
console.log(x, typeof x);

x = num.toString().length; // 1
console.log(x, typeof x);

x = num.toFixed(2); // 5.00 string
console.log(x, typeof x);

const y = new Number(5.4567);
x = y.toFixed(2); // 5.46 string
console.log(x, typeof x);

x = y.toPrecision(2); // 5.5 string
console.log(x, typeof x);

x = y.toExponential(2); // 5.46e+0 string
console.log(x, typeof x);

x = y.toLocaleString('en-US'); // 5.457 string
console.log(x, typeof x);

x = y.valueOf(); // 5.4567 'number'
console.log(x, typeof x);

x = Number.MAX_VALUE; // 1.7976931348623157e+308 'number'
console.log(x, typeof x);

//------ Math object ------//
x = Math.sqrt(9); // 3
x = Math.abs(-5); // 5
x = Math.round(4.2); // 4
x = Math.pow(2,3); // 8
x = Math.random(); 