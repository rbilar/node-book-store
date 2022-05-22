import express from "express";

const app = express();

app.use(express.json());

const books = [
  { "id": 1, "title": "Bíblia Sagrada" },
  { "id": 2, "title": "Hinário Adventista" }
]

app.get("/", (req, res) => {
  res.status(200).send("Book Store");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  let bookIndex = findBook(req.params.id);

  res.status(200).json(books[bookIndex]);
});

app.post("/books", (req, res) => {
  books.push(req.body);

  res.status(200).json(books[books.length - 1]);
});

app.put("/books/:id", (req, res) => {
  let bookIndex = findBook(req.params.id);
  if (bookIndex < 0) {
    return res.status(404).send("Book not found");
  }

  books[bookIndex].title = req.body.title;

  res.status(200).json(books[bookIndex]);
});

app.delete("/books/:id", (req, res) => {
  let bookIndex = findBook(req.params.id);
  if (bookIndex < 0) {
    return res.status(404).send("Book not found");
  }

  books.splice(bookIndex, 1);

  res.status(204).send("Book deleted");
});


function findBook(id) {
  return books.findIndex(book => book.id == id);
}

export default app