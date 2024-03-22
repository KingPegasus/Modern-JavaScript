// Get child elements from parent

const parent = document.querySelector('.parent');
let out = parent.children[0];
console.log(out);

parent.children[0].innerText = 'ChildOne';

parent.lastElementChild.innerText = 'Last Child';

// Get parent elements from child element
const child = document.querySelector('.child');
out = child.parentElement;
console.log(out);

child.parentElement.style.border = '1px solid black';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
out = secondItem.nextElementSibling;
secondItem.nextElementSibling.innerText = 'Sibling One';
console.log(out);
