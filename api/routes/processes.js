const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const api = express.Router();

api.post("/create/process", async (req, res) => {
  const data = req.body;
  const process = await prisma.processes.create({
    data: {
      name: data.name,
      description: data.description,
      efficiency: data.efficiency,
      indicators: {
        create: {
          name: data.indicator.name,
          objetive: data.indicator.objetive,
          periodicity: data.indicator.periodicity,
          in_charge: data.indicator.in_charge,
          weight: data.indicator.weight,
          userId: data.indicator.id_users,
        },
      },
    },
  });
  res.json(process);
});

api.get("/get/processes", async (req, res) => {
  const processes = await prisma.processes.findMany();
  res.json(processes);
});

module.exports = api;
