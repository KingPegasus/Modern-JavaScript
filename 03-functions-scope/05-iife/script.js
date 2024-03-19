// const user = 'john'; //error as user is defined in other file

// how to do that now? IIFE

(function () {
  const user = 'john';
  console.log(user); // john
})();

// other example with parameters
(function (name) {
  console.log('user: ' + name); // user: undefined
})();

// named function
(function hello() {
  console.log('Hello'); // Hello
})();
