function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // remove all through forEach
  //items.forEach((item) => item.remove());

  //remove all through while
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  console.log('Clear Items');
}

const clearBtn = document.querySelector('#clear');

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// Is there are more than 1 functions to be triggered onclick,
// then new one will be replaced with previous.
// So, Better way is addEventListener()
clearBtn.addEventListener('click', function () {
  alert('Clear Items');
});

clearBtn.addEventListener('click', onClear);

setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

//setTimeout(() => clearBtn.click(), 1000); // Clicking through script
