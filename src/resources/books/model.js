const dbClient = require("../../utils/database");
const db = require("../../utils/database");
const { buildBooksDatabase } = require("../../utils/mockData");

function Book() {
  function createTable() {
    const sql = `      
      CREATE TABLE IF NOT EXISTS books (
        id              SERIAL        PRIMARY KEY,
        title           VARCHAR(255)   NOT NULL,
        type            VARCHAR(255)   NOT NULL,
        author          VARCHAR(255)   NOT NULL,
        topic           VARCHAR(255)   NOT NULL,
        publicationDate DATE           NOT NULL
      );
    `;

    dbClient.query(sql)
      .then((result) => console.log("[DB] Book table ready."))
      .catch(console.error);
  }

  function createOneBook(newBook, callback) {
		const { title, type, author, topic, publicationDate } = newBook;
    console.log(newBook)
		const sql = `
            INSERT INTO books (
                title, type, author, topic, publicationDate
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
		dbClient
			.query(sql, [title, type, author, topic, publicationDate])
			.then((result) => {
        console.log("result", result);
				callback(result.rows[0]);
			})
	}

  function mockData() {
    const createBook = `
      INSERT INTO books
        (title, type, author, topic, publicationDate)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

    const books = buildBooksDatabase();

    books.forEach((book) => {
      dbClient.query(createBook, Object.values(book)).catch(console.error);
    });
  }

  createTable();
  mockData();
  return{
    createOneBook
  }
}

module.exports = Book;
