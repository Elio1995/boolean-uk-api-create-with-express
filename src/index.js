const express = require("express");
const morgan = require("morgan");

const dbClient = require("./utils/database");
const booksRouter = require("./resources/books/router");
const petsRouter = require("./resources/pets/router");

/* IMPORT ROUTERS */

const app = express();

/* SETUP MIDDLEWARE */

app.use(morgan("dev"));
app.use(express.json())

/* SETUP ROUTES */

app.use("/books", booksRouter)
app.use("/pets", petsRouter)

/* CATCH-ALL TO TEST ROUTES */

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  dbClient.connect((error) => {
    if (error) {
      console.error("[ERROR] Connection error: ", error.stack);
    } else {
      console.log("\n[DB] Connected...\n");

      // Book();
      // Pet();
    }
  });

  console.log(`[SERVER] Running on http://localhost:${port}/`);
});
