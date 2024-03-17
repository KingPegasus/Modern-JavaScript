// You will see the output in the Console tab after you Inspect the page on the web page
console.log(100);

console.log('Hello world!');

console.log(20, 'Hello world!', true);

console.error('Alert');

console.warn('Warning');

console.table({name: 'Raza', email: 'test@example.com'});

console.group('simple');
console.log('this will be grouped');
console.error('This will be grouped');
console.warn('This will be grouped');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: brown';

console.log('%cHello world', styles);