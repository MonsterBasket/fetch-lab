function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => {console.log(json); renderBooks(json);});
  }

function fetch1031(){
  fetch('https://anapioficeandfire.com/api/characters/1031')
    .then(resp => resp.json())
    .then(json => {  
      const main = document.querySelector('main');
      const h4 = document.createElement('h4')
      h4.innerHTML = `Someone at Academy Xi apparently likes ${json.name}`
      main.appendChild(h4);
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  let pages = 0;
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const indent = (() => {
      while(books.indexOf(book) < 9)
      return "&nbsp&nbsp"; 
      return "";})() //so ugly
    h2.innerHTML = `${indent}${books.indexOf(book)+1}. ${book.name}`;
    if (books.indexOf(book) === 4)
      h2.style.color = 'red';
    pages += book.numberOfPages;
    main.appendChild(h2);
  });
  const h3 = document.createElement('h3')
  h3.innerHTML = `Total number of pages in all books is ${pages}!`
  main.appendChild(h3);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetch1031();
});

