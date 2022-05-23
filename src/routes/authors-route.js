import express from "express";
import authorsController from "../controllers/authors-controller.js";

const router = express.Router();

router
  .get("/authors", authorsController.get)
  .get("/authors/:id", authorsController.show)
  .post("/authors", authorsController.post)
  .put("/authors/:id", authorsController.put)
  .delete("/authors/:id", authorsController.delete)

export default router;
