const timerId = setTimeout(changeText, 2000);

console.log('Hello from global');

function changeText() {
  console.log('Hello from callback');
  document.querySelector('h1').innerHTML = 'Hello from callback';
}

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('Timer Cancelled');
});
