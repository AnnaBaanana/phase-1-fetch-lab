//The 5th book in the series
fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(`The 5th book in the series is ${json[4].name}`));
//The 1031st character in the series
fetch("https://anapioficeandfire.com/api/characters/1031")
  .then((resp) => resp.json())
  .then((json) => console.log(`The 1031st character in the GOT books is ${json.name}.`));
//The total number of pages of all the books
fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => json.map(book => book.numberOfPages))

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books').then(res => res.json()).then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
