// Fetching a JSON File
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

//Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

//Fetching a text file
fetch('https://api.github.com/users/KingPegasus/repos')
  .then((response) => response.json())
  .then((data) => console.log(data));
