const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const api = express.Router();

api.post("/create/project", async (req, res) => {
  const data = req.body;
  const project = await prisma.projects.create({
    data: {
      front_proyect_id: data.front_proyect_id,
      userId: data.id_users,
      companieId: data.id_companies,
      stateId: data.id_project_states,
      portfolioId: data.id_portfolios,
      name: data.name,
      longitude: data.longitude,
      latitude: data.latitude,
    },
  });
  res.json(project);
});

api.get("/get/projects", async (req, res) => {
  const projects = await prisma.projects.findMany();
  res.json(projects);
});

/////////////////////////// States Projects /////////////////////////////

api.post("/create/project/state", async (req, res) => {
  const data = req.body;
  try {
    const state = await prisma.project_states.create({
      data: data,
    });
    console.log("Se agrego un nuevo estado");
    res.json(state);
  } catch (error) {
    console.log("!! ERROR ¡¡\n", error);
    res.json({ err: error });
  }
});

api.get("/get/project/state", async (req, res) => {
  const states = await prisma.project_states.findMany();
  res.json(states);
});

/////////////////////////// Porfolio Projects /////////////////////////////

api.post("/create/project/portfolio", async (req, res) => {
  const data = req.body;
  let aux = await prisma.aux_portfolios.findFirst({
    where: {
      AND: [
        { clasificationId: { equals: data.id_clasification } },
        { typeId: { equals: data.id_type } },
      ],
    },
  });

  if (aux != null) {
    createPortfolio(data, aux).then((portf) => {
      res.json(portf);
    });
  } else {
    aux = await prisma.aux_portfolios.create({
      data: {
        clasificationId: data.id_clasification,
        typeId: data.id_type,
      },
    });
    createPortfolio(data, aux).then((portf) => {
      res.json(portf);
    });
  }
});

api.get("/get/project/portfolios", async (req, res) => {
  const portfolios = await prisma.portfolios.findMany();
  res.json(portfolios);
});

/////////////////////////// Aux-Porfolio Projects /////////////////////////////

api.post("/create/project/aux", async (req, res) => {
  const data = req.body;
  try {
    const aux = await prisma.aux_portfolios.create({
      data: {
        clasificationId: data.id_clasification,
        typeId: data.id_type,
      },
    });
    console.log("Se agrego un nuevo Aux-Protfolio");
    res.json(aux);
  } catch (error) {
    console.log("!! ERROR ¡¡\n", error);
    res.json({ err: error });
  }
});

api.get("/get/project/aux", async (req, res) => {
  const aux_portfolios = await prisma.aux_portfolios.findMany();
  res.json(aux_portfolios);
});

/////////////////////////// Clasification Projects /////////////////////////////

api.post("/create/project/clasification", async (req, res) => {
  const data = req.body;
  try {
    const clasification = await prisma.clasification.create({
      data: data,
    });
    console.log("Se agrego una nueva clasificacion");
    res.json(clasification);
  } catch (error) {
    console.log("!! ERROR ¡¡\n", error);
    res.json({ err: error });
  }
});

api.get("/get/project/clasifications", async (req, res) => {
  const clasifications = await prisma.clasification.findMany();
  res.json(clasifications);
});

/////////////////////////// Type Projects /////////////////////////////

api.post("/create/project/type", async (req, res) => {
  const data = req.body;
  try {
    const type = await prisma.type.create({
      data: data,
    });
    console.log("Se agrego un nuevo Tipo");
    res.json(type);
  } catch (error) {
    console.log("!! ERROR ¡¡\n", error);
    res.json({ err: error });
  }
});

api.get("/get/project/types", async (req, res) => {
  const types = await prisma.type.findMany();
  res.json(types);
});

//////////////////////////////////////////// XD ////////////////////////

async function createPortfolio(data, aux) {
  try {
    const portfolio = await prisma.portfolios.create({
      data: {
        name: data.name,
        auxId: aux.id,
      },
    });
    console.log("Se creo un nuev portafolio");
    return portfolio;
  } catch (error) {
    console.log("!! ERROR ¡¡\n", error);
    return { err: error };
  }
}

module.exports = api;
