let myLibrary = [];
let form = document.getElementById("formID")

document.querySelector(".form-toggle").addEventListener("click", () =>{
    form.classList.remove("hide")
})

document.querySelector(".form-close").addEventListener("click", () =>{
    form.classList.add("hide")
})


document.getElementById("formID").addEventListener("submit", (e) => {

    e.preventDefault()
    let title = document.getElementById("book-name").value
    let author = document.getElementById("author-title").value
    let pages = document.getElementById("pages").value
    let status = document.querySelector('input[name="status"]:checked').value;
    let cardGrid = document.querySelector(".card-grid")

    console.log(status)

    class book {

        constructor (title, author, pages, status) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.status = status;
    }
    
            cardMaker () {
                let div = document.createElement("div")
                cardGrid.append(div)
                div.classList.add("card")

                let bookDiv = document.createElement("div")
                div.append(bookDiv)
                bookDiv.classList.add("book")

                let cardHeading = document.createElement("div")
                bookDiv.appendChild(cardHeading)
                cardHeading.classList.add("card-heading")

                let bookHeading = document.createElement("h3")
                cardHeading.append(bookHeading)
                bookHeading.classList.add("book-title")

                let authorName = document.createElement("p")
                cardHeading.append(authorName)
                authorName.classList.add("authors-name")

                let cardPages = document.createElement("div")
                bookDiv.appendChild(cardPages)
                cardPages.classList.add("card-pages")

                let bookPages = document.createElement("p")
                cardPages.append(bookPages)
                bookPages.classList.add("book-pages")

                let jsPages = document.createElement("p")
                cardPages.append(jsPages)
                jsPages.classList.add("js-pages")

                let buttonDiv = document.createElement("div")
                bookDiv.appendChild(buttonDiv)
                buttonDiv.classList.add("buttons")

                let remove = document.createElement("button")
                buttonDiv.append(remove)
                remove.classList.add("remove")

                let readStatus = document.createElement("p")
                cardPages.append(readStatus)
                readStatus.classList.add("read-status")

                let readStatusBtn = document.createElement("button")
                buttonDiv.append(readStatusBtn)
                readStatusBtn.classList.add("change-status")

                console.log("This Works!")
                bookHeading.textContent = this.title 
                authorName.textContent = this.author
                bookPages.textContent = "Book Pages :"
                jsPages.textContent = this.pages
                remove.textContent = "Remove from Library"
                readStatusBtn.textContent = "Change Read Status"
                readStatus.textContent = this.status

                let removal = cardGrid.querySelectorAll(".card")

                removal.forEach((element, index) => { /// loops through each card
                    let button = element.querySelector(".remove")  /// for each element finds the card
                    button.addEventListener("click", (e) => { /// adds an event listener to the button it found on the card
                        console.log("E.target :" + e.target)
                        console.log(e)
                        console.log(element)
                        console.log( e.parentElement)
                        console.log(element.parentElement)
                        element.parentElement.removeChild(element)
                    })

                
                    });
                

                          
            }
        } 


    let userBook = new book (title ,author , pages , status)
    userBook.cardMaker()
    myLibrary.push(userBook)

    console.log(myLibrary)



    readStatusBtn.addEventListener("click", () => {
        if (readStatus.textContent === "Read"){
            console.log("ReadStatus is working!")
            readStatus.textContent = "Not Read"
        } else{
            readStatus.textContent = "Read"
        }
    })
    




});
    







/*
    myLibrary.push(hobbit)
    let hobbit = new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet")
    console.log(hobbit)
    console.log( new book ("J.R.R. Tolkien", "The hobbit", "72", "not read yet"))
    console.log(hobbit.addBookToLibrary())

*/



    
    


