import express from "express";
import authorsRoutes from "./authors-route.js";
import booksRoutes from "./books-route.js"

const index = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Book Store");
  });

  app.use(
    express.json(),
    authorsRoutes,
    booksRoutes
  )
}

export default index;
