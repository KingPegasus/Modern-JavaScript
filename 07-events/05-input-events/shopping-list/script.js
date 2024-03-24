const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(event) {
  console.log(event.target.value);
  heading.textContent = event.target.value;
}

function onChecked(event) {
  const isChecked = event.target.checked;
  console.log(isChecked);
  heading.textContent = isChecked ? 'Checked' : 'Unchecked';
}

function onBlur(event) {
  console.log('Blurred');
  itemInput.style.outlineStyle = 'none';
}

function onFocus(event) {
  console.log('Focus');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
