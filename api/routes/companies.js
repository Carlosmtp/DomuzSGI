const express = require("express");
const api = express.Router();
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const regex = require("../regular_expresions")
api.post("/create/company", async (req, res) => {
    try {
        const data = req.body;
        if (!regex.validate(regex.NIT, data.nit)) {
            throw new Error('el campo nit no cuenta con el formato requerido: 1235678-9')
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