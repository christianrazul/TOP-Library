let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", (e) => {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});
