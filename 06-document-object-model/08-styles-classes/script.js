const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className
  console.log(itemList.className);
  //text.className = 'card dark';

  // classList
  console.log(itemList.classList);
  itemList.classList.forEach((c) => console.log(c));
  // text.classList.add('dark');

  text.classList.toggle('dark');
  // text.classList.replace('card', 'dark');

  // Change style
  itemList.style.lineHeight = '3';
}
document.querySelector('button').onclick = run;
