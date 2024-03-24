const form = document.getElementById('item-form');

function onSubmit(event) {
  event.preventDefault();
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill all required feilds');
    return;
  }
  console.log(item, priority);
}

function onSubmit2(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const item = formData.get('item');
  const priority = formData.get('priority');
  if (item === '' || priority === '0') {
    alert('Please fill all required feilds');
    return;
  }
  console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);
