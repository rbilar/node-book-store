import authors from "../models/authors.js"

class authorsController {

  static get = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static show = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, author) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure finding a author.` });
      } else if (author == null) {
        res.status(404).send("author not found.");
      } else {
        res.status(200).json(author);
      }
    });
  };

  static post = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - Failure creating a author.`});
      } else {
        res.status(201).json(author);
      }
    });
  };

  static put = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err, author) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure updating a author.` });
      } else {
        res.status(200).json(author);
      }
    });
  };

  static delete = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err, author) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failure updating a author.` });
      } else {
        res.status(200).json(author);
      }
    });
  };

};

export default authorsController;
