import express from "express";
import db from "./config/db-connect.js"
import books from "./models/books.js"
import booksRoutes from "./routes/books-route.js";
import indexRoute from "./routes/index.js"

db.on("error", console.log.bind(console, "ERROR: Failure connection!"));
db.once("open", () => {
  console.log("Success connection!");
});

const app = express();
app.use(express.json());
indexRoute(app)

export default app
