const express = require("express");
const api = express.Router();

api.get("/create/user", (req, res) => {
  const datos = req.body;
});

api.get("/", (req, res) => {
  res.send("Esta Funcionando Correctaente");
});

module.exports = api;
