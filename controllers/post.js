const posts = require("../db/posts");

function getPosts(req, res) {
  const acceptHeader = req.get("Accept");
  console.log(acceptHeader);
  if (acceptHeader.includes("application/json")) {
    res.json(posts);
  } else if (acceptHeader.includes("text/html")) {
    const ul = `<ul>${posts.map(post => `<li>${post.title}</li>`).join("")}</ul>`;
    res.send(ul);
  } else {
    // Gestione dei formati non supportati
    res.status(406).send("Formato non supportato");
  }
}

module.exports = { getPosts };
