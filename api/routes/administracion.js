const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const api = express.Router();

api.get("/get/counters", async (req, res) => {
  let counter = {
    usuarios: 0,
    procesos: 0,
    proyectos: 0,
    objetivos: 0,
    empresas: 0,
    planesAccion: 0,
  };
  counter.usuarios = await prisma.users.count();
  counter.procesos = await prisma.processes.count();
  counter.proyectos = await prisma.projects.count();
  counter.objetivos = await prisma.objetives.count();
  counter.empresas = await prisma.companies.count();
  counter.planesAccion = await prisma.action_plans.count();
  res.json(counter);
});

module.exports = api;
