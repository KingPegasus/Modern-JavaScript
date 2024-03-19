// function add(a,b){
//     return a+b;
// }

// lets write the above function using arrow function

const add = (a, b) => {
  return a + b;
};

// other shorter way to write
const sub = (a, b) => a - b; // implicit return

// Returning an object
const createObj = () => ({
  name: 'create',
});
console.log(createObj());

const numbers = [1, 2, 3, 4];

numbers.forEach(function (n) {
  console.log(n);
});

numbers.forEach((n) => console.log(n));
