import express from "express";
import booksRoutes from "./books-route.js"

const index = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Book Store");
  });

  app.use(
    express.json(),
    booksRoutes
  )
}

export default index;
