const express = require("express");
const api = express.Router();
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const validRegex = require("../regular_expresions")

api.post("/create/company", async (req, res) => {
    try {
        const data = req.body;
        if (!validRegex('numeric', data.nit)) {
            throw new Error('el campo nit sólo puede contener números')
        } else {
            const companie = await prisma.companies.create({
                data: {
                    nit: data.nit,
                    name: data.name,
                },
            });
            res.json(companie)
        }

    } catch (error) {
        res.json({
            error: error.message
        })
    }
})
module.exports = api;