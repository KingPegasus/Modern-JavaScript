let x;
const y = 'Raza';
const z = 34;

x = 'Hello, world ' + y + ' ' + z;
console.log(x);

// Template Literals
x2 = `Hello, world ${y} ${z}`;
console.log(x2);

// Properties and Methods
const s = new String("Hello, world");
console.log(s, typeof s); // String {'Hello, world'} 'object'

x = s.length;
console.log(x, typeof x); // 12 'number'

x = s[0]; // H - Access value by key
console.log(x, typeof x);

x = s.__proto__; // gets prototype of s

x = s.toUpperCase();
console.log(x, typeof x); // HELLO, WORLD string

x = s.charAt(0);
console.log(x, typeof x); // H string (same as s[0])

x = s.indexOf('o'); // gives index of first character o
console.log(x, typeof x); //4 'number'

x = s.substring(4,8); // o, w
console.log(x); 

x = s.substring(4); // o, world
console.log(x); // from 4 to the end

x = s.slice(-11, -6); // ello,
console.log(x);

x = s.replace('world', 'Universe'); // Hello, Universe
console.log(x);

x = s.includes('ello'); // true
console.log(x);

x = s.valueOf(); // Hello, world
console.log(x);

x = s.split(' '); // Array ['Hello,', 'world']
console.log(x);

x = s.toLowerCase().charAt(0) + s.substring(1); // hello, world
console.log(x);