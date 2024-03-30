try {
  console.log(x);
} catch (err) {
  console.log('Error: ' + err);
}

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }
  return number * 2;
}

try {
  const z = double('hello world');
  console.log(z);
} catch (err) {
  console.log('Error: ' + err);
}

//----- Error Handling ----//
const getUsers = async () => {
  try {
    //const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('https://httpstat.us/500');
    if (!response.ok) {
      throw new Error('Request failed: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Error: ' + err);
  }
};

//getUsers();

const getPosts = async () => {
  //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await fetch('https://httpstat.us/500');
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }
  const data = await response.json();
  console.log(data);
};

getPosts().catch((err) => {
  console.log('Error: ' + err);
});
