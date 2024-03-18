//----- Object Literal -------//
// key/value pairs

const person = {
  name: 'Raza',
  age: 34,
  isAdmin: true,
  address: {
    street: '123 main St',
    city: '  San Francisco',
    state: 'MA',
  },
};

console.log(person);
console.log(person.name, person.age);
console.log(person['age']);
console.log(person.address.street);

// Updating a key/value pair
person.address.street = '456 Main St';
console.log(person.address.street);

// Deleting a key/value pair
delete person.address.street; // delete key
console.log(person.address); // {city: '  San Francisco', state: 'MA'}

// Inserting a key/value pair
person.hasChild = true;
console.log(person);

// Adding fucntion to person
person.greet = function () {
  console.log(`Hello, my name is ${person.name}`);
};
console.log(person);

person.greet(); // calling function

// adding a key with space in it
person['last name'] = 'Saleemi';
console.log(person); // but you can't access using dot notation

//----- Methods and Spread Operator -------//
const todo = new Object(); // or simply {}
todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

// Nesting
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); //{a: 1, b: 2, c: 3, d: 4}

const obj4 = Object.assign({}, obj1, obj2); // same as spread
console.log(obj4); //{a: 1, b: 2, c: 3, d: 4}

const todos = [
  { id: 1, name: 'todo1' },
  { id: 2, name: 'todo2' },
  { id: 3, name: 'todo3' },
];
x = todos[0].name; // todo1

// Methods
x = Object.keys(todos[0]);
console.log(x); // ['id', 'name']

x = Object.keys(todos[0]).length;
console.log(x); // 2

x = Object.values(todos[0]);
console.log(x); // [1, 'todo1']

x = Object.entries(todos[0]);
console.log(x); // 2D Array

//----- Destructuring -------//
// Structure
const firstName = 'Raza';
const age = 30;

const human = {
  firstName,
  age,
};
console.log(human);

// Destructuring
// example 1
const car = {
  color: 'red',
  model: '2018',
};
const { color, model } = car;
console.log(color, model); // red 2018

// example 2
const car2 = {
  color2: 'red',
  model2: '2018',
  user: { userName: 'Raza' },
};
const {
  color2,
  model2,
  user: { userName },
} = car2; // destructuring
console.log(userName); // Raza

// example 3
const nums = [1, 2, 3, 4, 5];
const [first, second] = nums;
console.log(first, second); // 1 2

// example 4 - rest operator (also looks (...) like spread operator)
const [firstNum, secondNum, ...restArray] = nums;
console.log(restArray); // [3, 4, 5]
