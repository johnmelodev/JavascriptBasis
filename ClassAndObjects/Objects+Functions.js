// CREATING BOOK CLASS
class Book {
    constructor(title, author, publisher, publicationYear) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.availability = true;
    }
}

// CREATING LIBRARY CLASS
class Library {
    constructor(name, phone, address, collection) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.bookCollection = collection || [];
    }

    searchBookByTitle(title) {
        this.bookCollection.forEach(book => {
            if (book.title === title) {
                console.log(book);
            }
        });
    }

    lendBook(title) {
        let lent = false;
        this.bookCollection.forEach(book => {
            if (book.title === title && book.availability === true) {
                book.availability = false;
                lent = true;
            }
        });
        if (!lent) {
            console.log("Book not available for lending.");
        }
        return lent;
    }

    returnBook(title) {
        this.bookCollection.forEach(book => {
            if (book.title === title) {
                book.availability = true;
                console.log("Book returned");
            }
        });
    }
}

// CREATING OBJECTS OF THE BOOK CLASS
let books = [
    new Book("book1", "Marcos", "publisher A", 2001),
    new Book("book2", "Marcos", "publisher F", 1997),
    new Book("book3", "Carlos", "publisher F", 2010),
    new Book("book4", "João", "publisher A", 2005),
    new Book("book5", "Fábio", "publisher C", 2020)
];

let library = new Library("DoDev Library", "123456", "Street 2", books);

library.searchBookByTitle("book2");
library.lendBook("book1");
library.returnBook("book1");
