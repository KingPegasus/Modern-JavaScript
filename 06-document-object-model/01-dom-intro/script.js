//accessing the HTML using properties
console.dir(window.document);
console.log(window.document.body.innerHTML);
console.log(document.links);

//document.body.innerHTML = '<h1>Changed Through Code</h1>';

const main = document.getElementById('main');
console.log(main.innerHTML);
//main.innerHTML = '<h1> Hello World! </h1>';

document.querySelector('#main h1').innerText = 'DOM - Changed Through Code';
console.log(document.querySelector('#main h1').innerText);
