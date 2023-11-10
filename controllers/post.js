// Implementare il metodo getPosts che riceve in ingresso una richiesta HTTP e restituisce un array di oggetti
const path = require('path');
const fs = require('fs');
const posts = require("../db/posts");

// Funzione che restituisce un array di oggetti
function getPosts(req, res) {
  const acceptHeader = req.get("Accept");
  console.log(acceptHeader);
  if (acceptHeader.includes("application/json")) {
    res.json(posts);
  } else if (acceptHeader.includes("text/html")) {
    // Leggi il file HTML
    fs.readFile(path.join(__dirname, '../postList.html'), 'utf8', (err, data) => {
      // Se c'è un errore
      if (err) {
        console.error(err);
        res.status(500).send("Errore nel recupero del file HTML");
        // Se non c'è nessun errore
      } else {
        // Sostituisci @list con il contenuto dinamico
        const htmlContent = data.replace("@list", posts.map(post => `<li><strong>${post.title}</strong> <span style="margin-left: 10px;">${post.content}</span></li>`).join(""));
        // Invia il file HTML con il contenuto sostituito
        res.send(htmlContent);
      }
    });
  } else {
    // Gestione dei formati non supportati
    res.status(406).send("Formato non supportato");
  }
}

// Esporto il modulo
module.exports = { getPosts };
