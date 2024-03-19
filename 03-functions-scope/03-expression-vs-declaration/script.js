console.log(addDollarSign(100)); // $100 (Hoisting because of declaration)

// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}
console.log(addDollarSign(100)); // $100

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
}; // note the semicolon

console.log(addPlusSign(200)); // +200
