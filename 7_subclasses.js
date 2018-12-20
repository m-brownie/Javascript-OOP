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
}

// Magazine sub-class
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate subclass
const mag1 = new Magazine('Mag 1', 'Jim', '2016', 'Feb');
console.log(mag1);
