const express = require("express");
const api = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

api.post("/create/rol", async (req, res) => {
  const data = req.body;
  const rol = await prisma.roles.create({ data: data });
  res.json(rol);
});

api.get("/get/roles", async (req, res) => {
  const roles = await prisma.roles.findMany();
  res.json(roles);
});

api.post("/update/rol/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const rol = await prisma.roles.update({
    where: {
      id: parseInt(id),
    },
    data: data,
  });
  res.json(rol);
});

module.exports = api;
