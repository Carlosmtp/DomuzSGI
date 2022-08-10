const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const api = express.Router();

api.get("/get/counters", async (req, res) => {
  let counter = {
    users: 0,
    processes: 0,
    projects: 0,
    objetives: 0,
    companies: 0,
    action_plans: 0,
  };
  counter.users = await prisma.users.count();
  counter.processes = await prisma.processes.count();
  counter.projects = await prisma.projects.count();
  counter.objetives = await prisma.objetives.count();
  counter.companies = await prisma.companies.count();
  counter.action_plans = await prisma.action_plans.count();
  res.json(counter);
});

module.exports = api;
