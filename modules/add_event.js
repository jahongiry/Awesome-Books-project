import BookClass from './book_class.js';
import displayBook from './display_book.js';

const registeredBooks = document.querySelector('.registered_books');
const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');

const addFun = (books) => {
  const book = new BookClass(title.value, author.value);
  book.addbook(books, book);
  displayBook(books);
  localStorage.setItem('books', JSON.stringify(books));
  registeredBooks.classList.add('registered_books2');
};
export default addFun;