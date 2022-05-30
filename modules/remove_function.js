import BookClass from './book_class.js';
import { displayBook } from './display_book.js';
import { books } from '../script.js';

export function remove(index) {
  const booksArr = new BookClass();
  book.removeBook(books, index);
  displayBook(books);
  localStorage.setItem('books', JSON.stringify(books));
  // if (localStorage.getItem('books')) {
  //   if (localStorage.getItem('books').length <= 2) {
  //     registeredBooks.classList.remove('registered_books2');
  //   }
  // }
}
window.remove = remove;