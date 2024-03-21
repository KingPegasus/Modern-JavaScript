console.log(document.getElementById('app-title').innerText);
console.log(document.getElementById('app-title').id);

// set attributes
document.getElementById('app-title').innerText = 'Changed title';

// get and store
const refObj = document.getElementById('app-title');
//console.log(refObj);
console.log(refObj.innerText);

// Change styles
refObj.style.color = 'red';
refObj.style.backgroundColor = 'yellow';

// Query Selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)'));

// use these methods on other elements
const list = document.querySelector('ul');
console.log(list.querySelector('li:nth-child(2)'));
