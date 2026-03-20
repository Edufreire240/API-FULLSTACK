const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Olá Nicoly2");
});


app.listen(3005, () => {
  console.log("Servidor on");
});
