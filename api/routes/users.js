const express = require("express");
const api = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

api.post("/create/user", async (req, res) => {
  const data = req.body;
  const person = await prisma.people.create({
    data: {
      person_id: data.person_id,
      name: data.name,
      lastname: data.lastname,
      mail: data.mail,
      phone: data.phone,
      user: {
        create: {
          password: data.password,
          rolId: data.id_roles,
        },
      },
    },
  });
  res.json(person);
});

api.post("/login", async (req, res) => {
  const data = req.body
  const person_id = data.person_id
  const pass = data.password
  try {
    const login = await prisma.people.findUnique({
      where: {
        person_id: person_id
      },
      include: {
        user: true
      }
    });
    if (login == null) {
      throw new Error("La persona no existe en el sistema");
    } else {
      if (pass == login.user.password) {
        res.json({
          person_id: login.person_id,
          name: login.name,
          lastname: login.lastname,
          rol: login.user.rolId
        });
      } else {
        throw new Error("Contraseña incorrecta");
            }
    }
  } catch (e) {
    res.json({
      error: e.message
    })
  }
})

api.get("/get/users", async (req, res) => {
  const users = await prisma.users.findMany({
    include: {
      id_people: true,
      id_roles: true,
    },
  });
  res.json(users);
});

api.get("/", (req, res) => {
  res.send("Esta Funcionando Correctaente");
});

module.exports = api;