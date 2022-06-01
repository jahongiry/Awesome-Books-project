const registeredBooks = document.querySelector('.registered_books');
const contactInfo = document.querySelector('.contact-info');
const addForm = document.querySelector('.add-form ');
const updateHeading = document.getElementById('heading');

export const listPage = () => {
  registeredBooks.style.display = 'block';
  contactInfo.style.display = 'none';
  addForm.style.display = 'none';
  updateHeading.innerHTML = 'All awesome books';
};

export const addPage = () => {
  addForm.style.display = 'block';
  registeredBooks.style.display = 'none';
  contactInfo.style.display = 'none';
  updateHeading.innerHTML = 'Add a New Book';
};

export const contactPage = () => {
  contactInfo.style.display = 'flex';
  registeredBooks.style.display = 'none';
  addForm.style.display = 'none';
  updateHeading.innerHTML = 'Contact Information';
};