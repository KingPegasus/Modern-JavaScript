//----- Function Basics -----//
function sayHello() {
  console.log('Hello');
}

sayHello(); //calling function

function add(num1, num2) {
  console.log(num1 + num2);
}

add(1, 2); // not returning anything

function add(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
  console.log('This will not be called');
}

const result = add(1, 3); //  returning
console.log(result);

//----- Parameters and Arguments -----//

function registerUser(user) {
  return user + ' is registered';
}

console.log(registerUser()); // undefined is registered

// default parameter is defined
function registerUser2(user = 'Bot') {
  return user + ' is registered';
}
console.log(registerUser2()); // Bot is registered
console.log(registerUser2('Raza')); // Raza is registered

// Rest Params
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 100)); // 115

// Objects as parameters
function loginUser(user) {
  return `The user ${user.name} with id of ${user.id} is logged in`;
}
const user = {
  id: 1,
  name: 'Raza',
};
console.log(loginUser(user)); // The user Raza with id of 1 is logged in

// Arrays as parameters
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 2, 3, 4, 5]);
