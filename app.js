let myLibrary = [];

// constructor for each Book object
function Book(title, author, numOfPages, hasRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.hasRead = hasRead;
}

// switches between read and not read
Book.prototype.hasReadToggle = function () {
  this.hasRead = !this.hasRead;
};

// function for button to toggle between read and not read yet when clicked
function hasReadToggle(index) {
  myLibrary[index].hasReadToggle();
  renderLibrary();
}

// function to add Books to the library
function addBookToLibrary() {
  // get the values of each form field
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let numOfPages = document.querySelector("#numOfPages").value;
  let hasRead = document.querySelector("#hasRead").checked;

  // instantiate a new object to put the values into
  let newBook = new Book(title, author, numOfPages, hasRead);

  // push "newBook" object to myLibrary array
  myLibrary.push(newBook);

  // call renderLibrary class
  renderLibrary();
}

function renderLibrary() {
  let library = document.querySelector(".library");
  library.innerHTML = "";
  // loop through myLibrary to render out each book
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");
    bookDiv.innerHTML = `
    <div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h5 class="author>${book.author}</h3>
    </div>
    <div class="card-body">
      <p>${book.numOfPages} pages</p>
      <p class="hasRead-status">${book.hasRead ? "Read" : "Not Read Yet"}</p>
      <button class="remove-btn" onclick="removeBook(${i})">Remove Book</button>
      <button class="read-btn" onclick="hasReadToggle(${i})">Toggle Read</button>
    </div>
    `;
    library.appendChild(bookDiv);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
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
  addBookToLibrary();
});
