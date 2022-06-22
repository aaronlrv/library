let myLibrary = [];

document.getElementById("formID").addEventListener("submit", (e) => {
    e.preventDefault()

    let title = document.getElementById("book-name").value
    let author = document.getElementById("author-title").value
    let pages = document.getElementById("pages").value
    let status = document.getElementById("status").value

    let userBook = new book (title ,author , pages , status)
    myLibrary.push(userBook)


    function book (author, title, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    } 
    
    console.log(myLibrary)
    

});

/*
    myLibrary.push(hobbit)
    let hobbit = new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet")
    console.log(hobbit)
    console.log( new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet"))
    console.log(hobbit.addBookToLibrary())

*/



    
    


