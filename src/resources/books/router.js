const express = require("express");
const Book = require("./model");

const booksRouter = express.Router();

const { createOneBook } = Book();

booksRouter.get("/", (req, res) => {});

booksRouter.get("/:id", (req, res) => {});

booksRouter.post("/", (req, res) => {
	const newBook = req.body;
    console.log("newBook", newBook);
	createOneBook(newBook, (resp) => {
		res.json({ book: resp });
	});
});

module.exports = booksRouter;