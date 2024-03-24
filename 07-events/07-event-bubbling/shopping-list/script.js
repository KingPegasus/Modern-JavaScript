const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

button.addEventListener('click', function (event) {
  alert('Button was clicked');
  event.stopPropagation();
});

div.addEventListener('click', function () {
  alert('Div was clicked');
});
