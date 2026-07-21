class Book {
    constructor (title, author, numPages, isRead) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.isRead = isRead;
        this.id = crypto.randomUUID();
    }

    info() {
        return (`${this.title} por ${this.author}, ${this.numPages} páginas, ${this.isRead}, id: ${this.id}`);
    }
};

//todos los libros se van a almacenar en este array
const myLibrary = [];

function addBookToLibrary(title, author, numPages, isRead) {
    //coger parámetros, crear un libro y almacenarlo en el array myLibrary
    const libro = new Book(title, author, numPages, isRead);
    myLibrary.push(libro);
};

addBookToLibrary("El Hobbit", "J.R.R. Tolkien", 450, "no leído todavía");
addBookToLibrary("El señor de los anillos", "J.R.R. Tolkien", 1200, "leído");
addBookToLibrary("Harry Potter", "J.K. Rowling", 300, "leído");
addBookToLibrary("El triángulo de hielo", "Marcos Nieto", 520, "leído");
addBookToLibrary("El juego de Ender", "Orson Scott Card", 400, "no leído todavía");

function libreria(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info());
    }
};

libreria(myLibrary);