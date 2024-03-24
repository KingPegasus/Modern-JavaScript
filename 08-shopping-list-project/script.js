const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemFilter = document.getElementById('filter');
const clearBtn = document.getElementById('clear');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
  const items = getItemsFromStorage();
  items.forEach((item) => addItemToDom(item));
  CheckListChange();
}

function addItemSubmit(event) {
  event.preventDefault();
  const item = itemInput.value;
  if (item === '') {
    alert('Please add an item');
    return;
  }
  if (checkIfItemExists(item)) {
    alert('Item already exists');
    return;
  }
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  }
  addItemToDom(item);
  addItemToStorage(item);

  itemInput.value = '';

  CheckListChange();
}

function addItemToDom(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.push(item);

  //convert to JSON stringand set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function onClickItem(event) {
  if (event.target.parentElement.classList.contains('remove-item')) {
    removeItem(event.target.parentElement.parentElement);
    CheckListChange();
  } else {
    setItemToEdit(event.target);
  }
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();

  return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
  isEditMode = true;
  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'));
  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = item.textContent;
}

function removeItem(item) {
  if (confirm('Are you sure you want to remove?')) {
    removeItemFromStorage(item.textContent);
    item.remove();
  }
}
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  console.log(itemsFromStorage);
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems(event) {
  if (confirm('Are you sure you want to remove all?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    localStorage.removeItem('items');
  }

  CheckListChange();
}

function CheckListChange() {
  itemInput.value = '';
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '#333';
  isEditMode = false;
}

function filterItems(event) {
  const items = itemList.querySelectorAll('li');
  items.forEach((item) => {
    //if (item.innerText.includes(itemFilter.value) || itemFilter.value === '') {
    if (item.innerText.indexOf(itemFilter.value) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function getItemsFromStorage() {
  let itemsFromStorage;
  const currentStorageItems = localStorage.getItem('items');
  if (currentStorageItems === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(currentStorageItems);
  }
  return itemsFromStorage;
}

// Initialize app
function initialize() {
  // Event Listeners
  itemForm.addEventListener('submit', addItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  CheckListChange();
}

initialize();
