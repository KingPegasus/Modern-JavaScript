//---- Global and Function Scope -----//
console.log(window.innerWidth); // Browser inner width
console.log(innerWidth); // Browser inner width

const x = 1;
function run() {
  console.log(window.innerWidth); // Browser inner width
  console.log(x, 'in function'); // Can access x from gobal scope
}

function func2() {
  const y = 50;
  console.log(y); // y is function scope and can be accessed here
}
func2(); // 50
//console.log(y); // y is undefined in gobal scope

//---- Block Scope ----//
const a = 100;
// a block
{
  const b = 200;
  var c = 100;
  console.log(a, b, c);
}
// console.log(a, b); // b is undefined in gobal scope
console.log(c); // output is 100 as var is not block scoped.

function func3() {
  var d = 100;
}
//console.log(d); // var is undefined. var is function scoped

//---- Nested Scope ----//
function first() {
  const x = 100;

  function second() {
    const y = 50;
    var z = 100;
    console.log('x', x); // x is accessable
  }
  second();
  // y & z are not accessable here
}
first();
