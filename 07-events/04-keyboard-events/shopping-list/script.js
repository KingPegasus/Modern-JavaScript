const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('onKeyPress', e.key);
};

const onKeyUp = (e) => {
  console.log('onKeyUp', e.key);
};

const onKeyDown = (e) => {
  if (e.repeat) {
    console.log('You are holding the key down', e.key);
    return;
  } else {
    console.log('onKeyDown', e.key);
  }

  // key
  if (e.key === 'Enter') {
    alert('key: Enter key pressed', e.key);
  }

  // keyCode
  if (e.keyCode === 13) {
    alert('keyCode: Enter key pressed', e.key);
  }

  // code
  if (e.code === 'Digit1') {
    console.log('code: 1 key pressed');
  }

  //console.log('Shift: ' + e.shiftKey);
};
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
