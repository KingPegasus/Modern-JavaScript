const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

//div.innerText = 'Hello'; // usually used for replacing the existing
// better to create a new text node
const text = document.createTextNode('Hello');

div.appendChild(text);
console.log(div.outerHTML);

// now put the div in the DOM
// document.body.appendChild(div);

// now put the div in the list
document.querySelector('ul').appendChild(div);

// now we want it to look like any other element
// lets make functions to create it

// function to create a button element
function createButtonElement(className) {
  const button = document.createElement('button');
  button.className = className;
  return button;
}

// function to create a icon element
function createIconElement(className) {
  const icon = document.createElement('i');
  icon.className = className;
  return icon;
}

// function to create a list item
function createListItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  return li;
}

// now using these functions to create the required elements
const li = createListItem('Cheese');
const button = createButtonElement('remove-item btn-link text-red');
const icon = createIconElement('fa-solid fa-xmark');
button.appendChild(icon);
li.appendChild(button);
document.querySelector('ul').appendChild(li);

// now create a function to make the whole item
function createShoppingListItem(item) {
  const li = createListItem(item);
  const button = createButtonElement('remove-item btn-link text-red');
  const icon = createIconElement('fa-solid fa-xmark');
  button.appendChild(icon);
  li.appendChild(button);
  return li;
}

// now lets add two more items to the shopping list
shoppingList = document.querySelector('ul');

const BreadItem = createShoppingListItem('Bread');
const SoapItem = createShoppingListItem('Soap');

shoppingList.appendChild(BreadItem);
shoppingList.appendChild(SoapItem);

//---- Inserting Elements, Text and HTML ----//
// insertAdjacentElements Example
function insertAdjacentElement() {
  const filter = document.querySelector('.filter');
  const h3 = document.createElement('h3');
  h3.textContent = 'insertAdjacentElement';
  filter.insertAdjacentElement('beforebegin', h3);
}
insertAdjacentElement();

// insertAdjacentText Example
function insertAdjacentText() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('afterend', 'insertAdjacentText');
}
insertAdjacentText();

// insertAdjacentHTML Example
function insertAdjacentHTML() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.insertAdjacentHTML('afterend', '<h3> insertAdjacentHTML <h3>');
}
insertAdjacentHTML();

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = 'insertBefore';
  const eightChild = document.querySelector('li:nth-child(8)');
  ul.insertBefore(li, eightChild);
  console.log(ul.children);
}
insertBeforeItem();

// Custom insertAfter
function insertAfterItem(li, targetItem) {
  targetItem.parentElement.insertBefore(li, targetItem.nextSibling);
}

const targetItem = document.querySelector('li:nth-child(9)');
const newItem = document.createElement('li');
newItem.textContent = 'insertAfterItem';

insertAfterItem(newItem, targetItem);

// Custom insertAfter 2nd
// function insertAfterItem(li, targetItem) {
//     const ul = document.querySelector('ul');
//     ul.insertBefore(li, targetItem.nextSibling);
//   }

//---- Replace Elements ----//
function replaceLastElement() {
  const lastItem = document.querySelector('li:last-child');
  const li = document.createElement('li');
  li.textContent = 'Replaced the "insertAfterItem"';
  lastItem.replaceWith(li);
}
replaceLastElement();

function replaceAllItems() {
  const lis = document.querySelectorAll('li');
  lis.forEach((item, index) => {
    item.innerHTML = 'Replace All';
  });
}
// replaceAllItems(); // all li tags will be replaced

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');
  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}
replaceChildHeading();

//---- Remove Elements ----//
function removeClearButton() {
  document.querySelector('#clear').remove();
}
removeClearButton();

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}
// removeFirstItem(); //removes the first item

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber}`);
  //const li = document.querySelector('li')[itemNumber-1];

  ul.removeChild(li);
}
//removeItem(10);
