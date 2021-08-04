function readingList(books) {
  // Write your code here...
  let newUlist = document.createElement("ul");
  for (var i = 0; i < books.length; i++) {
    newLi = document.createElement("li");
    newLi.innerHTML = `<p> "book title" ${books[i].title} "book author" ${books[i].author} </p>`;
    newUlist.appendChilidElement("li");
     let newImge = newLi.createElement("img");
    newImge.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8kmnCWhgk7KAFeZtVE-nR-nrdemEyTcq4A&usqp=CAU";
    li.appendChilidElement("img");
    if (books[i].alreadyRead === flase) {
      document.newImge.style.backgroundColor = "red";
    } else {
      newImge.document.style.backgroundColor = "green";
    }
  }
  document.getElementById("content").appendChilidElement("ul");
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
