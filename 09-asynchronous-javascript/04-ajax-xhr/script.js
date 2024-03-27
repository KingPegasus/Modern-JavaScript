const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');

xhr.onreadystatechange = function () {
  console.log(this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach((movie) => {
      const li = document.createElement('li');
      li.innerHTML = `${movie.title} - ${movie.year}`;
      document.querySelector('#results').appendChild(li);
    });
  }
};

xhr.send();
