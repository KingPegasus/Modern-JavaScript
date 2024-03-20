console.log(10 > 20 && 30 > 15); // false
console.log(10 > 20 || 30 > 15); // true

// && - Will return first falsy value or last value
let a;
a = 10 && 20; // 20
a = 10 && 20 && 30; // 30
a = 10 && 20 && 5; // 5
a = 10 && 0 && 5; // 0
a = 10 && '' && 0 && 5; // ''
a = 10 && 'R' && 0 && 5; // 0

const arr = ['raza', 'saleemi'];
arr && arr.length > 0 && console.log(arr[0]); // raza

const arr2 = undefined;
arr2 && arr2.length > 0 && console.log(arr2[0]); // second staement not excuted

// || - Will return first truthy value or last value
let b;
b = 10 || 20; // 10
b = 0 || 20; // 20
b = 0 || null || false || undefined; // undefined

// ?? - Returns the right side operand when left is null or undefined
let c;
c = 10 ?? 20; // 20
c = 0 ?? undefined; // 0
c = undefined ?? 0; // 0
c = undefined ?? false; // false
c = 0 ?? null ?? false ?? undefined; // 0
c = null ?? false ?? undefined; // false
c = null ?? undefined; // undefined
console.log(c);

// ||= assigns the right side value only if the left is falsy value
a = false;
if (!a) {
  a = 10;
}
a = a || 10;
a ||= 10;

// &&= assigns the right side value only if the left is truthy value
b = 10;
if (b) {
  b = 20;
}
b &&= 20;

// ??= assigns the right side value only if the left is null or undefined
c = null;

if (c === null || c === undefined) {
  c = 30;
}
c ??= 30;

// Ternary Operator (? :)
const age = 13;
if (age >= 18) {
  console.log('You can Vote');
} else {
  console.log('You can not Vote');
}

age >= 18 ? console.log('You can Vote') : console.log('You can not Vote');

const canVote = age >= 18 ? true : false;
