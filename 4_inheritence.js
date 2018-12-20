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

// Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherite prototype methods
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;

// Instantiate magazine object
const mag1 = new Magazine('Mag1', 'Jon Doe', '2018', 'Jan');
console.log(mag1);