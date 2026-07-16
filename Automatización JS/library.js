function Book (title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.info = function info() {
     console.log(`${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead}`);
    }
};