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
        createMany: {
          data: data.indicators,
          skipDuplicates: true,
        },
      },
    },
  });
  res.json(process);
});

api.get("/get/processes", async (req, res) => {
  const processes = await prisma.processes.findMany({
    include: {
      indicators: true,
    },
  });
  res.json(processes);
});

///////////////////////////// Indicator ///////////////////////////

api.post("/create/process/indicators", async (req, res) => {
  const data = req.body;
  const count = await prisma.process_indicators.createMany({
    data: data,
    skipDuplicates: true,
  });
  res.json(count);
});

api.get("/get/process/indicators", async (req, res) => {
  const indicators = await prisma.process_indicators.findMany();
  res.json(indicators);
});

module.exports = api;
