const registeredBooks = document.querySelector('.registered_books');
const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const displayBook = (books) => {
  registeredBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    registeredBooks.innerHTML += `
    <div class="container container${i % 2}">
      <p class="title">"${books[i].title}" by ${books[i].author}</p>
      <button class="button" onclick="remove(${i})">Remove</button>
    </div>
   `;
    title.value = '';
    author.value = '';
  }
};
export default displayBook;