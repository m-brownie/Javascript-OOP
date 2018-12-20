// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Get summary
Book.prototype.getSummary = function() {
    return `${this.author} wrote ${this.title} in ${this.year}`;
};

Book.prototype.getAge = function() {
    return new Date().getFullYear() - this.year + ' an(s)';
}

// Revise / change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an object
const book1 = new Book("Le Signal", "M. Chattam", 2018);
const book2 = new Book("L'Appel du Néant", "M. Chattam", 2016);

console.log(book2);
console.log(book2.revise(2010));
console.log(book2);