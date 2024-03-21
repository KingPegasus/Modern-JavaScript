//---- forEach Method ----//
console.log('//---- forEach Method ----//');
let options = ['one', 'two', 'three', 'four'];

options.forEach((item, index) => {
  console.log(item, index);
});

options = ['five', 'six', 'seven', 'eight'];

// let create a function that we want to apply to each element
function applyFunction(input) {
  console.log(input);
}

options.forEach(applyFunction);

//---- filter Method ----//
console.log('//---- filter Method ----//');
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);

//---- map Method ----//
console.log('//---- map Method ----//');
const map1 = nums.map((num) => num * 3);
console.log(map1);

//---- reduce Method ----//
console.log('//---- reduce Method ----//');

const total = nums.reduce((sum, num) => sum + num);
console.log(total);

initialvalue = 100;
const total2 = nums.reduce((sum, num) => sum + num, initialvalue);
console.log(total2);

//---- Array Method Challenge ----//
console.log('//---- Array Method Challenge ----//');
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];
const youngPeople = people
  .filter((people) => people.age <= 25)
  .map((people) => {
    return {
      name: people.firstName + ' ' + people.lastName,
      email: people.email,
    };
  });
console.log(youngPeople);
