// Object litteral
const book1 = {
    title: 'Le signal',
    author: 'Chattam',
    year: 2018,
    getSummary: function() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    }
};

const book2 = {
    title: 'L\'appel du néant',
    author: 'Chattam',
    year: 2017,
    getSummary: function() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    }
};

console.log(book1.getSummary());
console.log(book2.getSummary());

console.log(Object.values(book1));
console.log(Object.keys(book1));