// "For" loop
for (let i = 0; i <= 2; i++) {
  console.log('Number', i);
}

// Nested "For" loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Using 'break' and 'continue'
for (let i = 0; i <= 5; i++) {
  if (i === 4) {
    console.log('Breaking');
    break;
  }
  if (i === 2) {
    console.log('Skipping');
    continue;
  }
  console.log('Number', i);
}

// 'while' loop
i = 0;
while (i < 3) {
  console.log('Num', i);
  i++;
}

// 'do while' loop
do {
  console.log('Hello from do while loop');
} while (false); // still gona run once

// 'for of' loop
const items = ['book', 'chair', 'table'];
for (const item of items) {
  console.log(item);
}

// loop over 'Map'
const map = new Map();
map.set('name', 'Raza');
map.set('age', 34);

for (const [key, value] of map) {
  console.log(key, value);
}

// 'for in' loop
const colorObj = {
  color1: 'black',
  color2: 'white',
  color3: 'red',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// but if you apply 'for in' on array
// it will return index
const arr = ['book', 'chair', 'table'];
for (const item in arr) {
  console.log(item); // 0 .. 1 .. 2
}

// 'for each
