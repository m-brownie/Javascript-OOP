class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    }

    getAge() {
        return new Date().getFullYear() - this.year + ' an(s)';
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Jim & John';
    }
}

// Instantiate Object
const book1 = new Book('Book 1', 'Doe', '2016');

// console.log(book1);
// console.log(book1.getAge());
// console.log(book1.revise('2015'));
// console.log(book1);
console.log(Book.topBookStore());