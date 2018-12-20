// Object Of Protos
const bookProtos = {
    getSUmmary: function() {
        return `${this.author} wrote ${this.title} in ${this.year}`;
    },
    getAge: function() {
        return new Date().getFullYear() - this.year + ' an(s)';
    }
}

// Create the object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book 1';
// book1.author = 'Doe';
// book1.year = '2013';

// => is equivalent of this :

const book1 = Object.create(bookProtos, 
    { 
        title: { value: 'Book 1' },
        author: { value: 'Doe' },
        year: { value: '2016' }
    });

console.log(book1);