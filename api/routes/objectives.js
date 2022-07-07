const {PrismaClient} = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const api = express.Router();

api.post("/create/objective", async (req, res) => {
  const data = req.body
  const name = data.name
  const description = data.description
  const prespectiveId = data.prespectiveId
  const indicators = data.indicators
  if (name == null) {
    throw new Error("debe ingresar un nombre para el objetivo usando la llave 'name'")
  }
  if (description == null) {
    throw new Error("debe ingresar una descripción para el objetivo usando la llave 'description'")
  }
  if (prespectiveId == null) {
    throw new Error("debe ingresar el identificador de prespectiva usando la llave 'prespectiveId'")
  } else if (!Number.isInteger(prespectiveId)) {
    throw new Error("'prespectiveId' debe ser un número entero")
  } else {
    const prespective = await prisma.perspective.count({
      where: {
        id: prespectiveId
      }
    })
    if (prespective == 0) {
      throw new Error("no existe l'prespectiveId' debe ser un número entero")
    }
  }
  const objective = await prisma.objetives.create({
    data: {
      name: data.name,
      description: data.description,
      prespectiveId: data.prespectiveId,
      indicators: {
        createMany: {
          data: data.indicators,
          skipDuplicates: true,
        },
      },
      initiatives: {
        createMany: {
          data: data.initiatives,
          skipDuplicates: true,
        },
      },
    },
  });
  res.json(objective);
});

api.get("/get/objectives", async (req, res) => {
  const objectives = await prisma.objetives.findMany({
    include: {
      indicators: true,
      initiatives: true,
    },
  });
  res.json(objectives);
});

//////////////////// Perspective /////////////////////////////////////////

api.post("/create/objective/perspective", async (req, res) => {
  const data = req.body
  const perspective = await prisma.perspective.create({
    data: data,
  });
  res.json(perspective)
});

api.get("/get/objectives/perspectives", async (req, res) => {
  const perspectives = await prisma.perspective.findMany();
  res.json(perspectives);
});

//////////////////////////// Indicators //////////////////////////////////

api.post("/create/objective/indicators", async (req, res) => {
  const data = req.body;
  const count = await prisma.objetive_indicators.createMany({
    data: data,
    skipDuplicates: true,
  });
  res.json(count);
});

api.get("/get/objectives/indicators", async (req, res) => {
  const indicators = await prisma.objetive_indicators.findMany();
  res.json(indicators);
});

//////////////////////////// Initiatives //////////////////////////////////

api.post("/create/objective/initiatives", async (req, res) => {
  const data = req.body;
  const count = await prisma.initiatives.createMany({
    data: data,
    skipDuplicates: true,
  });
  res.json(count);
});

api.get("/get/objectives/initiatives", async (req, res) => {
  const initiatives = await prisma.initiatives.findMany();
  res.json(initiatives);
});

module.exports = api;