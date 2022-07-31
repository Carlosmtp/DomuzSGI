const {
  PrismaClient
} = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const api = express.Router();

api.post("/create/proccess", async (req, res) => {
  const data = req.body;
  const process = await prisma.processes.create({
    data: {
      name: data.name,
      description: data.description,
      efficiency: data.efficiency,
      goal : DataTransfer.goal,
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

api.post("/update/proccess", async (req, res) => {
  const data = req.body;
  const process = await prisma.processes.update({
    where : {
      id : data.id
    },
    data: data
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

api.post("/update/process/indicator", async (req, res) => {
  const data = req.body;
  const indicator = await prisma.process_indicators.update({
    where : {
      id : data.id
    },
    data: data,
  });
  res.json(indicator);
})

api.get("/get/process/indicators", async (req, res) => {
  const indicators = await prisma.process_indicators.findMany();
  res.json(indicators);
});

api.delete("/delete/process/indicator", async (req, res) => {
  const id = parseInt(req.body.indicator_id);
  const del = await prisma.process_indicators.delete({
    where : {
      id: id,
    },
  })
  res.json("Indicador Eliminado")
})

///////////////////////// Periodic Records ///////////////////////
api.post("/add/periodic_record", async (req, res) => {
  const data = req.body;
  const record = await prisma.periodic_records.create({
    data: {
      indicatorId: data.indicator_id,
      expected_value: data.expected_value,
      archieved_value: data.archieved_value,
      record_date: new Date(data.record_date),
    }
  })
  res.json(record);
})

api.get("/get/periodic_records/", async (req, res) => {
  const year = req.query.year;
  const month = req.query.month;
  const indicator = req.query.indicator
  try {
    //in this json are the clauses indicated in the url
    var clauses = {
      where: {}
    };
    //indicator clause
    if (indicator !== undefined) {
      clauses.where.indicatorId = parseInt(indicator);
    }
    //date clause when only the year was entered
    if (year !== undefined & month == undefined) {
      clauses.where.record_date = {
        gte: new Date(year + "-jan-01"),
        lte: new Date(year + "-dec-31")
      };
      //date clause when the year and month were entered
    } else if (year !== undefined & month !== undefined) {
      clauses.where.record_date = {
        gte: new Date(year + month + "-01"),
        lte: new Date(year + month + "-31")
      };
      //error when the month was entered but not the year
    } else if (year == undefined & month !== undefined) {
      throw new Error("si desea filtrar por mes, debe ingresar el año")
    }
    const periodic_records = await prisma.periodic_records.findMany(clauses)
    res.json(periodic_records);
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
})

api.get("/get/last_record/", async (req, res) => {
  const indicatorId = req.query.indicator_id;
  const lastRecord = await prisma.periodic_records.findFirst({
    where: {
      indicatorId: parseInt(indicatorId),
    },
    orderBy: [
      {record_date : 'desc'}
    ]
  })
  res.json(lastRecord)
})
module.exports = api;