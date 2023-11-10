// Importo il modulo Express
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const postController = require("./controllers/post");

// Rotta principale
app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio blog!</h1>");
});

// Rotta per /posts utilizzando il controller
app.get("/posts", postController.getPosts);

// Avvio del server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
