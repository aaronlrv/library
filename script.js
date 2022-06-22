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


document.getElementById("formID").addEventListener("submit", (e) => {
    e.preventDefault()

    let bookName = document.getElementById("book-name").value
    let author = document.getElementById("author-title").value
    let pages = document.getElementById("pages").value
    let status = document.getElementById("status").value

    console.log(bookName)
    console.log(author)
    console.log(pages)
    console.log(status)
});


    
    


