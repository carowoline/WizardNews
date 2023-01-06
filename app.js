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
  
  </html>
  `;

  res.send(html);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
