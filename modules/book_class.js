export default class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
  }

  addbook = (books, book) => {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  removeBook = (books, index) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  };
}