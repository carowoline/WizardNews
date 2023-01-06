const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => {
  // CARO: posts is a copy of data array from postBank.js
  const posts = postBank.list();
  const html = `<!DOCTYPE html>
  <html>
  <head>
  <title>Wizard News</title>
  </head>
  <body>
    <ul>
    ${posts.map(post => `<li></li>`)}
    </ul>
  </body>
  </html>`;

  res.send(html);
});

// .map creates a new array for each element in posts

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
