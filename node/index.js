const fs = require("fs");
const path = require("path");
const { faker } = require("@faker-js/faker");

class Book {
  constructor(bookName, bookPrice) {
    this.bookName = bookName;
    this.bookPrice = bookPrice;
    this.id = faker.string.uuid();
  }
}

const generateBooksData = () => {
  const booksData = [];
  for (let i = 0; i < 1000; i++) {
    const randomBook = new Book(
      "Book " + String(i + 1) + " " + faker.person.fullName(),
      faker.number.float({ min: 10, max: 100, precision: 0.01 })
    );
    booksData.push(randomBook);
  }
  return booksData;
};
const pathToSave = path.resolve(__dirname, "../src/store", "booksData.json");
const saveBooksData = () => {
  const booksData = generateBooksData();
  fs.writeFile(pathToSave, JSON.stringify(booksData), (err) => {
    if (err) console.log(err);
  });
};

saveBooksData();
