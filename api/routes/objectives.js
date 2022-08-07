const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const api = express.Router();

api.post("/create/objective", async (req, res) => {
  const data = req.body;
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

api.post("/update/objective", async (req, res) => {
  const data = req.body
  const objetive = await prisma.objetives.update({
    where: {
      id: data.id,
    },
    data: data
  });
  res.json(objetive);
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
  const data = req.body;
  const perspective = await prisma.perspective.create({
    data: data,
  });
  res.json(perspective);
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

//////////////////////////// Action Plans //////////////////////////////////
api.post("/create/action_plan", async (req, res) => {
  const data = req.body;
  const actionPlan = await prisma.action_plans.create({
    data: {
      name: data.name,
      description: data.description,
      initiativeId: data.initiativeId,
      delivery_date: new Date(data.delivery_date),
      stateId: data.stateId,
      userId: data.userId,
    },
  });
  res.json(actionPlan);
});

api.post("/update/action_plan", async (req, res) => {
  const data = req.body;
  const actionPlan = await prisma.action_plans.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      description: data.description,
      initiativeId: data.initiativeId,
      delivery_date: new Date(data.delivery_date),
      stateId: data.stateId,
      userId: data.userId,
    },
  });
  res.json(actionPlan);
});

api.get("/get/action_plans", async (req, res) => {
  const actionPlans = await prisma.action_plans.findMany();
  res.json(actionPlans);
});

api.get("/get/action_plan", async (req, res) => {
  const id = req.query.action_plan_id;
  const actionPlan = await prisma.action_plans.findUnique({
    where: {
      id: parseInt(id)
    }
  });
  res.json(actionPlan);
})
api.delete("/delete/action_plan", async (req, res) => {
  const data = req.body;
  const actionPlan = await prisma.action_plans.delete({
    where: {
      id: data.id,
    },
  });
  res.json(actionPlan);
});

//////////////////////////// Plan States //////////////////////////////////
api.post("/create/plan_state", async (req, res) => {
  const data = req.body;
  const state = await prisma.plan_states.create({ data: data });
  res.json(state);
});

api.get("/get/plan_states", async (req, res) => {
  const states = await prisma.plan_states.findMany();
  res.json(states);
});

module.exports = api;
