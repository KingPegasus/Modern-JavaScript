const logo = document.querySelector('img');

const onClick = () => console.log('onClick event');
const onDoubleClick = () => console.log('onDoubleClick event');
const onRightClick = () => console.log('onRightClick event');
const onMouseDown = () => console.log('onMouseDown event');
const onMouseUp = () => console.log('onMouseUp event');
const onMouseWheel = () => console.log('onMouseWheel event');
const onMouseOver = () => console.log('onMouseOver event');
const onMouseOut = () => console.log('onMouseOut event');
const onDragStart = () => console.log('onDragStart event');
const onDrag = () => console.log('onDrag event');
const onDragEnd = () => console.log('onDragEnd event');

//Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
