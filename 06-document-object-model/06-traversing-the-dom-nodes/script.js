const parent = document.querySelector('.parent');

let out = parent.childNodes;
console.log(out);

out = parent.childNodes[3].innerHTML;
console.log(out);

out = parent.firstChild.textContent = 'Hello'; // white space
console.log(out);

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');

out = secondItem.nextSibling;
console.log(out);
