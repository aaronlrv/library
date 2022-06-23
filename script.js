let myLibrary = [];

document.getElementById("formID").addEventListener("submit", (e) => {

    e.preventDefault()
    let title = document.getElementById("book-name").value
    let author = document.getElementById("author-title").value
    let pages = document.getElementById("pages").value
    let status = document.querySelector('input[name="status"]:checked').value;
    let titleP = document.querySelector(".book-title")
    let authorsP = document.querySelector(".authors-name")
    let pagesP = document.querySelector (".js-pages")

    class book {

        constructor (title, author, pages, status) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.status = status;
    }
    
            cardMaker () {
                console.log("This Works!")
                titleP.textContent = this.title 
                authorsP.textContent = this.author
                pagesP.textContent = this.pages
            }
        } 

    

    let userBook = new book (title ,author , pages , status)
    userBook.cardMaker()
    myLibrary.push(userBook)



    
    console.log(myLibrary)


});




/*
    myLibrary.push(hobbit)
    let hobbit = new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet")
    console.log(hobbit)
    console.log( new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet"))
    console.log(hobbit.addBookToLibrary())

*/



    
    


