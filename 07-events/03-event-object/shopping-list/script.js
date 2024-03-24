const logo = document.querySelector('img');

function onClick(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  event.target.style.backgroundColor = 'black';
  console.log('type', event.type);
  console.log('timeStamp', event.timeStamp);
  console.log('clientX', event.clientX);
  console.log('clientY', event.clientY);
  console.log('offsetX', event.offsetX);
  console.log('offsetY', event.offsetY);
  console.log('pageX', event.pageX);
  console.log('pageY', event.pageY);
  console.log('screenX', event.screenX);
  console.log('screenY', event.screenY);
}

function onDrag(e) {
  document.querySelector('h1').textContent = `X: ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

// document.body.addEventListener('click', function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
// });
/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

// To prevent the default behavior of the event
// document.querySelector('a').addEventListener('click', function (event) {
//   event.preventDefault();
// });
