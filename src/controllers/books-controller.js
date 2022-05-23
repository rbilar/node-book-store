import books from "../models/books.js"

class booksController {

  static get = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static show = (req, res) => {
    const id = req.params.id;

    books.findById(id, (err, book) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure finding a book.` });
      } else if (book == null) {
        res.status(404).send("book not found.");
      } else {
        res.status(200).json(book);
      }
    });
  };

  static post = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Failure creating a book.`});
      } else {
        res.status(201).json(book);
      }
    });
  };

  static put = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err, book) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure updating a book.` });
      } else {
        res.status(200).json(book);
      }
    });
  };

  static delete = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err, book) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure updating a book.` });
      } else {
        res.status(200).json(book);
      }
    });
  };

};

export default booksController;
