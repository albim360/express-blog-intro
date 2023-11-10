// Importo il modulo Express
const express = require("express");
const app = express();
const port = 3000;

// Creo un metodo per ricevere una richiesta HTTP GET
app.get("/", (req, res) => {
  res.send("<h1>Benvenuto nel mio blog!</h1>");
});

// Eseguo l'app sul server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
