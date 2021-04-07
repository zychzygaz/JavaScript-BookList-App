const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    static UI(book) {
        const ele = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        td.innerText = book.title;
        td2.innerText = book.author;
        td3.innerText = book.isbn;
        ele.appendChild(td);
        ele.appendChild(td2);
        ele.appendChild(td3);
        tbody.appendChild(ele);
    }

    static UI2(book) {
        const ele = document.createElement("tr");
        ele.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" id='delA' class="del">X<a/></td>`;
        tbody.appendChild(ele);
    }

    static removeBook(el) {
        if (el.classList.contains("del")) {
            el.parentElement.parentElement.remove();
        }
    }
}

// document.addEventListener('DOMContentLoaded', Book.displayStuff)

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // checker(title, author, isbn);
    const book = new Book(title.value, author.value, isbn.value);
    if (title.value.trim() === "") {
        document.getElementById("smallTitle").className = "errorShow";
    } else if (author.value.trim() === "") {
        document.getElementById("smallAuthor").className = "errorShow";
    } else if (isbn.value.trim() === "") {
        document.getElementById("smallISBN").className = "errorShow";
    } else {
        Book.UI2(book);
        title.value = "";
        author.value = "";
        isbn.value = "";
    }

    setTimeout(function () {
        title.className = "form-control";
        author.className = "form-control";
        isbn.className = "form-control";
        document.getElementById("smallTitle").className = "";
        document.getElementById("smallAuthor").className = "";
        document.getElementById("smallISBN").className = "";
    }, 3000);
});

tbody.addEventListener("click", (e) => {
    Book.removeBook(e.target);
});
