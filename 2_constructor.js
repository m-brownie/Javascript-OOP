// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    }
}

// Instantiate an object
const book1 = new Book("Le Signal", "M. Chattam", 2018);
const book2 = new Book("L'Appel du Néant", "M. Chattam", 2017);

console.log(book2);