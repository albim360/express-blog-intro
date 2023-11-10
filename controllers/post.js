const posts = require("../db/posts");

function getPosts(req, res) {
  const acceptHeader = req.get("Accept");
  console.log(acceptHeader);
  if (acceptHeader.includes("application/json")) {
    res.json(posts);
  } else if (acceptHeader.includes("text/html")) {
    const ul = `<ul>${posts
      .map(
        (post) =>
          `<li><strong>${post.title}</strong> <span style="margin-left: 10px;"> ${post.content}</span> </li>`
      )
      .join("")}</ul>`;

    res.send(`
<html>
<head>
<style>
li {
  margin: 10px 0;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 4px;
}

strong {
  font-size: 1.2em;
  display: block;
  margin-bottom: 5px;
}
</style>  
</head>

<body>
${ul}
</body>
</html>
`);
  } else {
    // Gestione dei formati non supportati
    res.status(406).send("Formato non supportato");
  }
}

module.exports = { getPosts };
