var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")

function openpopup() {
    overlay.style.display="block"
    popup.style.display="block"
}

function closepopup() {
    overlay.style.display="none"
    popup.style.display="none"
}

var container = document.querySelector(".container")
var booktitle = document.getElementById("book_title")
var bookauthor = document.getElementById("book_author")
var bookdescription = document.getElementById("book_description")

function add(){
    var item = document.createElement("div")
    item.setAttribute("class","book_content")
    item.innerHTML = `<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append (item)
    overlay.style.display="none"
    popup.style.display="none"
}

function deletebook(event) {
    event.target.parentElement.remove()
}
