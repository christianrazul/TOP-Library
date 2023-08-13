let myLibrary = [];

function Book(title, author, numOfPages, hasRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.hasRead = hasRead;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let numOfPages = document.querySelector("#numOfPages").value;
  let hasRead = document.querySelector("#hasRead").value;
}

const newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", (e) => {
  let newBookForm = document.querySelector("#new-book-form");
  // overwrites style property "display" to "block" so that it shows up in the browser.
  newBookForm.style.display = "block";
});

const newBookForm = document.querySelector("#new-book-form");
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
