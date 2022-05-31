/* eslint no-use-before-define: ["error", { "variables": false }] */
import BookClass from './modules/book_class.js';
import displayBook from './modules/display_book.js';
import addFun from './modules/add_event.js';
import { listPage, addPage, contactPage } from './modules/list_add.js';
import { DateTime } from './modules/luxon.js';

const registeredBooks = document.querySelector('.registered_books');
const addButton = document.querySelector('.add-book');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const list = document.querySelector('.list');
const date = document.querySelector('.date');

const booksArr = new BookClass();
let { books } = booksArr;

window.onload = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  displayBook(books);
};

const remove = (index) => {
  const book = new BookClass();
  book.removeBook(books, index);
  displayBook(books);
  localStorage.setItem('books', JSON.stringify(books));
};

window.remove = remove;

if (localStorage.getItem('books')) {
  if (localStorage.getItem('books').length > 2) {
    registeredBooks.classList.add('registered_books2');
  }
} else {
  remove();
}

date.innerHTML = DateTime.local().toFormat('MMMM dd yyyy, h:mm:ss a');
addButton.addEventListener('click', () => {
  addFun(books);
});
list.addEventListener('click', listPage);
addNew.addEventListener('click', addPage);
contact.addEventListener('click', contactPage);