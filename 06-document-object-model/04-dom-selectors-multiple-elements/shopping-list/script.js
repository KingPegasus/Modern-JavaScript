const listItems = document.querySelectorAll('.item');
console.log(listItems); // NodeList
console.log(listItems[1].innerText);

listItems.forEach((item) => (item.style.color = 'red'));

//listItems[0].remove();

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); //HTMLCollection

// forEach function does not work on HTMLCollection
// So lets convert it to Array
const listItemArray = Array.from(listItems2);
listItemArray.forEach((item) => console.log(item.innerText));

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); //HTMLCollection
console.log(listItems3[0]);
