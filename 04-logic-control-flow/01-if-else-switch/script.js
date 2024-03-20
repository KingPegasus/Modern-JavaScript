if (true) {
  console.log('This will be printed to the console');
}

if (false) {
  console.log('This will NOT be printed to the console');
}

const inputValue = 13;
if (inputValue > 13) {
  console.log('inputValue > 13');
} else if (inputValue < 13) {
  console.log('inputValue < 13');
} else {
  console.log('inputValue = 13');
}

const x = 12;
switch (x) {
  case 12:
    console.log('x = 12');
    break;
  case 100:
    console.log('x = 100');
    break;
  default:
    console.log('x is not 12 or 100');
    break;
}

//--- Calculator ---//
const MyCalculator = (input1, input2, operator) => {
  let output = 'Err';
  switch (operator) {
    case '+':
      output = input1 + input2;
      break;
    case '-':
      output = input1 - input2;
      break;
    case '*':
      output = input1 * input2;
      break;
    case '/':
      output = input1 / input2;
      break;
    default:
      output = 'Invalid Operator';
      break;
  }
  return output;
};
const num1 = 5;
const num2 = 10;
console.log(MyCalculator(num1, num2, '+'));
console.log(MyCalculator(num1, num2, '-'));
console.log(MyCalculator(num1, num2, '*'));
console.log(MyCalculator(num1, num2, '/'));
console.log(MyCalculator(num1, num2, '&'));

//--- Truthy Falsy ---//
// Falsy Values:
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

// Truthy
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter # of children');
}

// Loose Equality (==)
console.log(false == 0); // true
console.log(false === 0); // false
