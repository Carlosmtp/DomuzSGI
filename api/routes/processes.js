const { PrismaClient } = require("@prisma/client");
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
      goal: DataTransfer.goal,
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
    where: {
      id: data.id,
    },
    data: data,
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
    where: {
      id: data.id,
    },
    data: data,
  });
  res.json(indicator);
});

api.get("/get/process/indicators", async (req, res) => {
  const indicators = await prisma.process_indicators.findMany();
  res.json(indicators);
});

api.get("/get/periodicities", async (req, res) => {
  const periodicities = await prisma.periodicities.findMany();
  res.json(periodicities);
});

api.delete("/delete/process/indicator", async (req, res) => {
  const id = parseInt(req.body.indicator_id);
  const del = await prisma.process_indicators.delete({
    where: {
      id: id,
    },
  });
  res.json("Indicador Eliminado");
});

///////////////////////// Periodic Records ///////////////////////
api.post("/add/periodic_record", async (req, res) => {
  const data = req.body;
  const record = await prisma.periodic_records.create({
    data: {
      indicatorId: data.indicator_id,
      expected_value: data.expected_value,
      archieved_value: data.archieved_value,
      record_date: new Date(data.record_date),
      goal: data.goal,
      weight: data.weight,
      efficiency: data.archieved_value / data.expected_value,
    },
  });

  /* const id_p = await prisma.process_indicators.findUnique({
    where: {
      id: data.indicator_id,
    },
    select: {
      processId: true,
    },
  });

  const indics = await prisma.process_indicators.findMany({
    where: {
      processId: id_p.processId,
    },
    select: {
      id: true,
    },
  });

  let last = [];
  for (let i = 0; i < indics.length; i++) {
    last[i] = await prisma.periodic_records.findFirst({
      where: {
        indicatorId: indics[i].id,
        record_date: {
          lte: new Date(dateToSearch),
        },
      },
      orderBy: [{ record_date: "desc" }],
    });
  }

  let sum_1 = 0;
  let sum_2 = 0;
  last.forEach((e) => {
    if (e != null) {
      sum_1 += e.efficiency * e.weight;
      sum_2 += e.goal * e.weight;
    }
  });
  let processEfficency = sum_1 / sum_2;
  //console.log(sum_1);
  //console.log(sum_2);
  //console.log(processEfficency);

  const report = await prisma.process_reports.create({
    data: {
      processId: id_p.processId,
      date: new Date(data.record_date),
      efficiency: processEfficency,
      goal: 0.5,
    },
  }); */

  const report = await autoInsertReport(data.indicator_id, data.record_date);
  res.json([record, report]);
});

api.post("/update/periodic_record", async (req, res) => {
  const data = req.body;
  const record = await prisma.periodic_records.update({
    where: {
      id: data.id,
    },
    data: {
      indicatorId: data.indicator_id,
      expected_value: data.expected_value,
      archieved_value: data.archieved_value,
      record_date: new Date(data.record_date),
      goal: data.goal,
      weight: data.weight,
      efficiency: data.archieved_value / data.expected_value,
    },
  });

  const report = await autoInsertReport(data.indicator_id, data.record_date);
  res.json(report);
});

api.get("/get/periodic_records/", async (req, res) => {
  const year = req.query.year;
  const month = req.query.month;
  const indicator = req.query.indicator;
  try {
    //in this json are the clauses indicated in the url
    var clauses = {
      where: {},
    };
    //indicator clause
    if (indicator !== undefined) {
      clauses.where.indicatorId = parseInt(indicator);
    }
    //date clause when only the year was entered
    if ((year !== undefined) & (month == undefined)) {
      clauses.where.record_date = {
        gte: new Date(year + "-jan-01"),
        lte: new Date(year + "-dec-31"),
      };
      //date clause when the year and month were entered
    } else if ((year !== undefined) & (month !== undefined)) {
      clauses.where.record_date = {
        gte: new Date(year + month + "-01"),
        lte: new Date(year + month + "-31"),
      };
      //error when the month was entered but not the year
    } else if ((year == undefined) & (month !== undefined)) {
      throw new Error("si desea filtrar por mes, debe ingresar el año");
    }
    const periodic_records = await prisma.periodic_records.findMany(clauses);
    res.json(periodic_records);
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
});

api.get("/get/last_record/", async (req, res) => {
  const indicatorId = req.query.indicator_id;
  const lastRecord = await prisma.periodic_records.findFirst({
    where: {
      indicatorId: parseInt(indicatorId),
    },
    orderBy: [{ record_date: "desc" }],
  });
  res.json(lastRecord);
});

///////////////////////// Reports ///////////////////////
api.get("/get/last_report/", async (req, res) => {
  const processId = req.query.process_id;
  const lastReport = await prisma.process_reports.findFirst({
    where: {
      processId: parseInt(processId),
    },
    orderBy: [{ date: "desc" }],
  });
  res.json(lastReport);
});

async function autoInsertReport(idIndicator, date) {
  const dateToRecord = date.split("-");
  const dateToSearch = dateToRecord[0] + "-" + dateToRecord[1] + "-31";

  const id_p = await prisma.process_indicators.findUnique({
    where: {
      id: idIndicator,
    },
    select: {
      processId: true,
    },
  });

  const indics = await prisma.process_indicators.findMany({
    where: {
      processId: id_p.processId,
    },
    select: {
      id: true,
    },
  });

  let last = [];
  for (let i = 0; i < indics.length; i++) {
    last[i] = await prisma.periodic_records.findFirst({
      where: {
        indicatorId: indics[i].id,
        record_date: {
          lte: new Date(dateToSearch),
        },
      },
      orderBy: [{ record_date: "desc" }],
    });
  }

  let sum_1 = 0;
  let sum_2 = 0;
  last.forEach((e) => {
    if (e != null) {
      sum_1 += e.efficiency * e.weight;
      sum_2 += e.goal * e.weight;
    }
  });
  let processEfficency = sum_1 / sum_2;
  //console.log(sum_1);
  //console.log(sum_2);
  //console.log(processEfficency);

  const report = await prisma.process_reports.create({
    data: {
      processId: id_p.processId,
      date: new Date(date),
      efficiency: processEfficency,
      goal: 0.5,
    },
  });

  return report;
}

module.exports = api;
