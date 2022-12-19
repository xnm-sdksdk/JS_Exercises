// Nuno Mendonça


/*
iterate over the array of books.
For each book, create a p element with the book title and author and append it to the page.
*/

let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    },
    {
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        author: "Ashlee Vange",
        alreadyRead: false
    },
    {
        title: "How to avoid a climate disaster",
        author: "Bill Gates",
        alreadyRead: true
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        alreadyRead: true
    }
];


for (let i =0; i< books.length ; i++) {
    const p = document.createElement('p'); // used to create a p to use later in the html 
    p.innerHTML = books[i].title + ' by ' + books[i].author; // access the title and author of the book
    document.body.appendChild(p); // add it to the p
}


// Ex 13 Done