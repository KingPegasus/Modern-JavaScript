let d;

d = new Date(); // Sun Mar 17 2024 22:38:12 GMT+0500
console.log(d, typeof d); // object

d = new Date(2024, 2, 17, 22, 37, 0); // Sun Mar 17 2024 22:37:00 GMT+0500
console.log(d, typeof d);

d = new Date('2024-03-17T10:40:00'); // Sun Mar 17 2024 10:40:00 GMT+0500
console.log(d, typeof d);

d = new Date('2024-03-17'); // Sun Mar 17 2024 05:00:00 GMT+0500
console.log(d, typeof d);

d = Date.now(); // current time in milliseconds
console.log(d, typeof d); // 1710697398883 'number'

d = new Date(1710697398883); // Sun Mar 17 2024 22:43:18 GMT+0500
console.log(d, typeof d); 

//-----Date Object ------//

let x = d.getFullYear(); // 2024 'number'
console.log(x, typeof x); 

x = d.getMinutes(); // 22:43:18
console.log(x, typeof x); // 43 'number'

x = Intl.DateTimeFormat('en-US').format(d);
console.log(x, typeof x); // 3/17/2024 string

x = Intl.DateTimeFormat('default').format(d);
console.log(x, typeof x); // 3/17/2024 string

x = d.toLocaleString('default', {month: 'short'});
console.log(x, typeof x); // Mar
