interface Book {
  bookName: string;
  bookPrice: number;
  id: string;
  index?: number;
}
// TODO: actually we don't need this specifiyng because we don't create Book objects anywhere on the front end side
// we make model class with constructor on back end usually - in order to create units of data to save them in DB then
// this is written, because there was a task description to make Book model
class Book implements Book {}
export default Book;
