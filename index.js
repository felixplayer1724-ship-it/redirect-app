const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("https://google.com"); // Troque para o link que quiser redirecionar
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando...");
});
