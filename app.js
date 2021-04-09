const form = document.getElementById("book-form");
const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const isbnElement = document.getElementById("isbn");
const bookList = document.getElementById("book-list");
const ui = new UI();
//addBook
form.addEventListener("submit", addBookName);
bookList.addEventListener("click", deleteBook);
function addBookName(e) {
  const title = titleElement.value;
  const author = authorElement.value;
  const isbn = isbnElement.value;
  if (title !== "" && author !== "" && isbn !== "") {
    const book = new Book(title, author, isbn);
    ui.addBooktoUI(book);
    setItemtoLS(book);
    setDefault();
  } else {
  }

  e.preventDefault();
}
//Set Default
function setDefault() {
  titleElement.value = "";
  authorElement.value = "";
  isbnElement.value = "";
}
//delete book
function deleteBook(e) {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.parentElement.parentElement.remove());
    deleteBookFromLS(e.target.parentElement.previousElementSibling.textContent);
    console.log(e.target.parentElement.previousElementSibling.textContent);
  }
}
//add to LS
function getItemFromLS() {
  return localStorage.getItem("book")
    ? JSON.parse(localStorage.getItem("book"))
    : [];
}

function setItemtoLS(input) {
  let book = getItemFromLS();
  book.push(input);
  localStorage.setItem("book", JSON.stringify(book));
}

//delete Book from LS
function deleteBookFromLS(text) {
  let book = getItemFromLS();
  book.forEach((t, index) => {
    if (t.isbn === text) {
      book.splice(index, 1);
    }
  });
  localStorage.setItem("book", JSON.stringify(book));
}
//dowload from LS
window.addEventListener("DOMContentLoaded", downloadBook);
function downloadBook() {
  let book = getItemFromLS();
  book.forEach(b => {
    ui.addBooktoUI(b);
  });
}
