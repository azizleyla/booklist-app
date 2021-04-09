class UI {
  addBooktoUI(book) {
    const html = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    const tbodyList = document.getElementById("book-list");
    tbodyList.innerHTML += html;
  }
}
