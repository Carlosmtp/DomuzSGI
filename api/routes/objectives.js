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
  const data = req.body;
  const objetive = await prisma.objetives.update({
    where: {
      id: data.id,
    },
    data: data,
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

api.get("/get/objectives/perspective/:id", async (req, res) => {
  const id = req.params.id;
  const perspective = await prisma.perspective.findUnique({
    where: {
      id: id,
    },
  });
  res.json(perspective);
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

api.post("/update/objective/indicator", async (req, res) => {
  const data = req.body;
  const indicator = await prisma.objetive_indicators.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      objectiveId: data.objectiveId,
      goal: data.goal,
      periodicityId: data.periodicityId,
    },
  });
  res.json(indicator);
});

api.delete("/delete/objective/indicator", async (req, res) => {
  const data = req.body;
  const indicator = await prisma.objetive_indicators.delete({
    where: {
      id: data.id,
    },
  });
  res.json(indicator);
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
  const initiatives = await prisma.initiatives.findMany({
    include: {
      plans: true,
    },
  });
  res.json(initiatives);
});

api.post("/update/objective/initiative", async (req, res) => {
  const data = req.body;
  const initiative = await prisma.initiatives.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      objectiveId: data.objectiveId,
      description: data.description,
    },
  });
  res.json(initiative);
});

api.delete("/delete/objective/initiative", async (req, res) => {
  const data = req.body;
  const InitPlans = await prisma.initiatives.findUnique({
    where: {
      id: data.id,
    },
    select: {
      plans: true,
    },
  });
  if (InitPlans.plans.length == 0) {
    const initiative = await prisma.initiatives.delete({
      where: {
        id: data.id,
      },
    });
    res.json(initiative);
    //res.json({ msg: "Igual a 0" });
  } else {
    res.json({
      error:
        "ERROR: no se puede eliminar la iniciativa pues hay planes asociados a esta.",
      wtf: InitPlans.plans,
    });
  }
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
  var clauses = { where: {} };
  const userId = req.query.userid;
  if (userId !== undefined) {
    clauses.where.userId = parseInt(userId);
  }
  const actionPlans = await prisma.action_plans.findMany(clauses);
  res.json(actionPlans);
});

api.get("/get/action_plan", async (req, res) => {
  const id = req.query.action_plan_id;
  const actionPlan = await prisma.action_plans.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      id_plan_states: true,
    },
  });
  res.json(actionPlan);
});

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

// Funcion para los planes de accion perspective
api.get("/get/action_plans/perpective/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const objcs = await prisma.perspective.findUnique({
    where: {
      id: id,
    },
    select: {
      objectives: {
        include: {
          initiatives: {
            include: {
              plans: true,
            },
          },
        },
      },
    },
  });

  let actionPlans = [];
  if (objcs != null) {
    let aux = 0;
    for (let i = 0; i < objcs.objectives.length; i++) {
      for (let j = 0; j < objcs.objectives[i].initiatives.length; j++) {
        for (
          let k = 0;
          k < objcs.objectives[i].initiatives[j].plans.length;
          k++
        ) {
          actionPlans[aux] = objcs.objectives[i].initiatives[j].plans[k];
          aux++;
        }
      }
    }
  }
  res.json(actionPlans);
});

module.exports = api;
