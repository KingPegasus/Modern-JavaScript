const post = {
  id: 1,
  title: 'Hello',
  body: 'Hello body',
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str); // {"id":1,"title":"Hello","body":"Hello body"}

// Parse JSON
const obj = JSON.parse(str);
console.log(obj); // {id: 1, title: 'Hello', body: 'Hello body'}

// Convert array to JSON string
const posts = [
  {
    id: 1,
    title: 'Hello',
    body: 'Hello body',
  },
  {
    id: 2,
    title: 'Hello2',
    body: 'Hello2 body',
  },
];
const str2 = JSON.stringify(posts);
console.log(str2);
/*
[{"id":1,"title":"Hello","body":"Hello body"},
{"id":2,"title":"Hello2","body":"Hello2 body"}]
*/
