let myLibrary = [];

function book (author, title, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
} 

let hobbit = new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet")
console.log(hobbit)
console.log( new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet"))


book.prototype.addBookToLibrary = function () {
    myLibrary.push(hobbit)
}

console.log(hobbit.addBookToLibrary())
console.log(myLibrary)



