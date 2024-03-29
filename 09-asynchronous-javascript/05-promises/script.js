// create a promise
const promise = new Promise((resolve, reject) => {
  // Do some asyc task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log('Promise consumed');
});

new Promise((resolve, reject) => {
  // Do some asyc task
  setTimeout(() => {
    console.log('Async task 2 complete');
    resolve({ name: 'Raza', age: 34 });
  }, 500);
}).then((user) => console.log(user, 'Promise 2 consumed successfully'));

new Promise((resolve, reject) => {
  // Do some asyc task
  setTimeout(() => {
    let error = true;
    if (error) {
      reject('Error: Something went wrong');
    } else {
      console.log('Async task 3 complete');
      resolve({ name: 'XX', age: 11 });
    }
  }, 500);
})
  .then((user) => console.log(user, 'Promise 3 consumed successfully'))
  .catch((error) => console.log(error))
  .finally(() => console.log('resolve or rejected'));

console.log('Hello from Global Scope');
