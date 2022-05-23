import express from "express";
import booksController from "../controllers/books-controller.js";

const router = express.Router();

router
  .get("/books", booksController.get)
  .get("/books/find-by-publishing-house", booksController.getByPublishingHouse)
  .get("/books/:id", booksController.show)
  .post("/books", booksController.post)
  .put("/books/:id", booksController.put)
  .delete("/books/:id", booksController.delete)

export default router;
