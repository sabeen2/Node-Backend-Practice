const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sabin", (req, res) => {
  res.send("This is twitter bitch");
  console.log(lis);
});

app.get("/login", (req, res) => {
  res.send("<h1>hello Login</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
