function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const f = fetch('https://anapioficeandfire.com/api/books');
  const json = f.then(resp => resp.json());
  
  const render = json.then(data => renderBooks(data))
  return render
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
  return fetchBooks();
});
